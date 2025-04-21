/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Partial_OrderContext_ = {
    /**
     * The unique cart session ID assigned at the time the cart was created.
     * Helps track cart attribution across systems.
     */
    cartSessionId?: string;
    /**
     * IP addresses associated with the user request.
     * Typically includes forwarded IPs and direct client IP.
     */
    ipAddresses?: Array<string>;
    /**
     * (Optional) Origin domain name if embedded or white-labeled.
     * Can help identify partner portals or iframe referrers.
     */
    originDomain?: string;
    /**
     * The referring URL from which the cart or checkout was initiated.
     * May be a partner site, marketing page, or event listing.
     */
    referrer?: string;
    /**
     * (Optional) Campaign ID, UTM source, or tracking label.
     * Useful for affiliate and analytics systems.
     */
    trackingId?: string;
    /**
     * Authenticated user ID, or null for anonymous guests.
     */
    uid?: string;
    /**
     * Raw User-Agent header from the client request.
     */
    userAgent?: string;
};

