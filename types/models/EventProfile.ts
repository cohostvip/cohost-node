/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuzzBuilder } from './BuzzBuilder';
import type { EventFeature } from './EventFeature';
import type { EventStatus } from './EventStatus';
import type { Location } from './Location';
import type { MultipartText } from './MultipartText';
import type { Photo } from './Photo';
import type { VenueBase } from './VenueBase';
/**
 * EventProfile respresent a public view of an event
 */
export type EventProfile = {
    buzzBuilder?: BuzzBuilder;
    channels: Array<string>;
    companyId: string;
    currency: string;
    description: MultipartText;
    end: string;
    flyer?: Photo;
    id: string;
    isSeries?: boolean;
    location?: Location;
    meta?: any;
    name: string;
    organizer: any;
    priceRange?: {
        max?: string;
        min?: string;
    };
    public: boolean;
    searchTags: Array<string>;
    sections: Array<string>;
    slug: string;
    start: string;
    status: EventStatus;
    summary: string;
    tags: Array<string>;
    ticketPrices: Array<string>;
    tz: string;
    url?: string;
    venue: VenueBase;
    widgets: Array<EventFeature>;
};

