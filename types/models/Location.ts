/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { LocationGeometry } from './LocationGeometry';
export type Location = {
    address: Address;
    geometry: LocationGeometry;
    /**
     * The name of the location.
     * Could be the name of the venue, or a custom name.
     */
    name: string;
    /**
     * Google place id associated with this location.
     */
    placeId: string;
    /**
     * The timezone in IANA Time Zone format (e.g., 'America/Los_Angeles', 'Europe/Berlin').
     * See: https://www.iana.org/time-zones
     */
    timezone?: string;
    /**
     * Venue id associated with this location.
     */
    venueId: string;
};

