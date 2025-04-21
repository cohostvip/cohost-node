/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Location } from './Location';
import type { Photo } from './Photo';
import type { Record_string_ResolvedCartContextOffering_ } from './Record_string_ResolvedCartContextOffering_';
/**
 * Represents the resolved context associated with a cart session.
 * This may be an event, venue, or organizer, and is used to enrich the cart with metadata
 * needed for UI rendering and pricing logic without requiring repeated DB lookups.
 *
 * Typically stored in `cart.meta.resolvedContext`.
 */
export type ResolvedCartContext = {
    /**
     * Unique identifier of the context entity.
     * Typically matches the cart's `contextId` (e.g., "evt_abc123").
     */
    id: string;
    location?: Location;
    logo?: Photo;
    offerings?: Record_string_ResolvedCartContextOffering_;
    /**
     * Human-readable title or name of the context entity.
     * Used for display in headers, summaries, and confirmations.
     */
    title: string;
};

