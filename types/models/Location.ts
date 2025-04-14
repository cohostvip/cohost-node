/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { LocationGeometry } from './LocationGeometry';
export type Location = {
    address: Address;
    geometry: LocationGeometry;
    name: string;
    placeId: string;
    timezone?: string;
    venueId: string;
};

