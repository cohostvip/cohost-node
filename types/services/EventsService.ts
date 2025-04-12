/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventProfile } from '../models/EventProfile';
import type { Ticket } from '../models/Ticket';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EventsService {
    /**
     * Get event profile
     * @param id The ID of the event
     * @returns any OK
     * @throws ApiError
     */
    public static getEvent(
        id: string,
    ): CancelablePromise<{
        status?: 'ok';
        data?: EventProfile;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Get event tickets
     * Retrieve a list of tickets for a specific event.
     * @param id The ID of the event
     * @param status Filter tickets by status (e.g., "live", "draft", etc.)
     * @returns any A list of tickets
     * @throws ApiError
     */
    public static getEventTickets(
        id: string,
        status?: (string | Array<string>),
    ): CancelablePromise<{
        status?: 'ok';
        data?: Array<Ticket>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/{id}/tickets',
            path: {
                'id': id,
            },
            query: {
                'status': status,
            },
            errors: {
                500: `Server error`,
            },
        });
    }
}
