import { apiBaseUrl } from "../apiVersion";
import { defaultSettings, runtimeOverrides } from "../settings";

/**
 * Options for configuring the request handler.
 */
interface RequestProps {
  /** API token for authentication (Bearer token). */
  token: string | null;

  /** Base URL of the API (defaults to versioned `apiBaseUrl`). */
  baseUrl?: string;

  /** Enable debug logging of requests/responses. */
  debug?: boolean;
}

/**
 * Supported HTTP methods.
 */
type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

/**
 * A function that performs a request to the Cohost API.
 * The generic <T> allows you to specify the expected response type.
 */
type RequestFn = <T = any>(
  path: string,
  options?: {
    method?: RequestMethod;
    data?: any;
    query?: Record<string, string | number | boolean | undefined>;
    headers?: Record<string, string>;
  }
) => Promise<T>;

/**
 * Creates a request function configured with authentication and client defaults.
 * The returned function supports generic return typing via <T>.
 */
const request = ({ token, baseUrl = apiBaseUrl, debug = false }: RequestProps): RequestFn => {
  return async function <T = any>(
    path: string,
    options: {
      method?: RequestMethod;
      data?: any;
      query?: Record<string, string | number | boolean | undefined>;
      headers?: Record<string, string>;
    } = {}
  ): Promise<T> {
    const { method = "GET", data, query, headers = {} } = options;

    // Construct query string from `query` object
    const queryString = query
      ? "?" +
      new URLSearchParams(
        Object.entries(query).reduce((acc, [key, value]) => {
          if (value !== undefined) acc[key] = String(value);
          return acc;
        }, {} as Record<string, string>)
      ).toString()
      : "";

    const finalBaseUrl = runtimeOverrides.baseUrl ?? baseUrl;
    const url = `${finalBaseUrl}${path}${queryString}`;

    // Merge default, runtime, and per-request headers
    const reqHeaders: Record<string, string> = {
      ...defaultSettings.headers,
      ...runtimeOverrides.headers,
      ...headers,
    };

    // Add Authorization header if token is present
    if (token) {
      reqHeaders["Authorization"] = `Bearer ${token}`;
    }

    // Only send body if method allows it
    const body = data && method !== "GET" ? JSON.stringify(data) : undefined;

    // Optional debug logging
    if (debug) {
      console.log(`[Cohost SDK] Request: ${method} ${url}`);
      if (body) console.log(`[Cohost SDK] Body:`, body);
      console.log(`[Cohost SDK] Headers:`, reqHeaders);
    }

    const res = await fetch(url, {
      method,
      headers: reqHeaders,
      body,
    });

    // Parse the response based on content type
    const isJson = res.headers.get("content-type")?.includes("application/json");
    const responseBody = isJson ? await res.json() : await res.text();

    // Handle error responses
    if (!res.ok) {
      const message = typeof responseBody === "string" ? responseBody : JSON.stringify(responseBody);
      console.error(`[Cohost SDK] Error: ${message}`, {
        url
      });
      throw new Error(`[Cohost SDK] ${res.status} ${res.statusText}: ${message}`);
    }

    // If wrapped response structure with { status: 'ok', data }, return `data`
    if (
      typeof responseBody === "object" &&
      responseBody !== null &&
      (responseBody as any).status === "ok" &&
      "data" in responseBody
    ) {
      return (responseBody as { data: T }).data;
    }

    // Fallback for raw/unwrapped responses
    return responseBody as T;
  };
};

export { type RequestProps, type RequestFn };
export { request };
