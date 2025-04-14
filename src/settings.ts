/**
 * Optional settings for customizing the behavior of the CohostClient.
 */
export interface CohostClientSettings {
    /** Enable verbose debug output for all API requests. */
    debug?: boolean;

    /** Override the default API base URL (defaults to apiBaseUrl). */
    apiUrl?: string;
}
