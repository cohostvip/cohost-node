/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { Photo } from './Photo';
export type VenueBase = {
    address: Address;
    formattedAddress: string;
    id: string;
    logo: Photo;
    name: string;
    placeId?: string;
    public: boolean;
    slug: string;
    tz: string;
};

