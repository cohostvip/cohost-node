import { apiBaseUrl } from "../apiVersion";

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
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

/**
 * A function that performs a request to the Cohost API.
 */
type RequestFn = (
    /** Path of the request relative to baseUrl */
    path: string,
    options?: {
        /** HTTP method (defaults to 'GET') */
        method?: RequestMethod;

        /** Request body data (auto-serialized as JSON) */
        data?: any;

        /** Query parameters to be appended to the URL */
        query?: Record<string, string | number | boolean | undefined>;

        /** Additional headers to merge into the request */
        headers?: Record<string, string>;
    }
) => Promise<any>;

/**
 * Creates a request function configured with authentication and defaults.
 */
const request = ({ token, baseUrl = apiBaseUrl, debug = false }: RequestProps): RequestFn => {
    return async (path, { method = 'GET', data, query, headers = {} } = {}) => {
        const queryString = query
            ? '?' + new URLSearchParams(
                Object.entries(query).reduce((acc, [key, value]) => {
                    if (value !== undefined) acc[key] = String(value);
                    return acc;
                }, {} as Record<string, string>)
            ).toString()
            : '';

        const url = `${baseUrl}${path}${queryString}`;

        const reqHeaders: Record<string, string> = {
            'Content-Type': 'application/json',
            ...headers,
        };

        if (token) {
            reqHeaders['Authorization'] = `Bearer ${token}`;
        }

        const body = data && method !== 'GET' ? JSON.stringify(data) : undefined;

        if (debug) {
            console.log(`[Cohost SDK] Request: ${method} ${url}`);
            if (body) console.log(`[Cohost SDK] Body:`, body);
        }

        const res = await fetch(url, {
            method,
            headers: reqHeaders,
            body,
        });

        const isJson = res.headers.get('content-type')?.includes('application/json');
        const responseBody = isJson ? await res.json() : await res.text();

        if (!res.ok) {
            const message = typeof responseBody === 'string' ? responseBody : JSON.stringify(responseBody);
            throw new Error(`[Cohost SDK] ${res.status} ${res.statusText}: ${message}`);
        }

        if (typeof responseBody === 'object' && responseBody !== null && responseBody.status === 'ok' && 'data' in responseBody) {
            return responseBody.data;
        }

        return responseBody;
    };
};

export { request, RequestProps, RequestFn };
