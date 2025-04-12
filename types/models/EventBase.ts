/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventStatus } from './EventStatus';
import type { Location } from './Location';
import type { Photo } from './Photo';
import type { VenueBase } from './VenueBase';
export type EventBase = {
    companyId: string;
    currency: string;
    end: string;
    flyer?: Photo;
    id: string;
    isSeries?: boolean;
    location?: Location;
    name: string;
    public: boolean;
    start: string;
    status: EventStatus;
    summary: string;
    tz: string;
    venue?: VenueBase;
};

