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
    /**
     * Curerncy used for the event.
     */
    currency: string;
    /**
     * The end date and time of the event in ISO 8601 format.
     */
    end: string;
    flyer?: Photo;
    id: string;
    isSeries?: boolean;
    location?: Location;
    name: string;
    /**
     * Is the event public?
     */
    public: boolean;
    /**
     * The start date and time of the event in ISO 8601 format.
     */
    start: string;
    status: EventStatus;
    summary: string;
    /**
     * The timezone in which the event is taking place.
     */
    tz: string;
    venue?: VenueBase;
};

