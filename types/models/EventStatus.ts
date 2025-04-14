/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Status of the event lifecycle.
 *
 * - `archived`: The event is archived and no longer visible in listings.
 * - `draft`: The event is still being edited and not yet published.
 * - `live`: The event is published and accepting actions (e.g., ticket sales).
 * - `started`: The event has begun.
 * - `ended`: The event has ended.
 * - `completed`: The event has concluded successfully and is finalized.
 * - `canceled`: The event was canceled and is no longer active.
 */
export enum EventStatus {
    ARCHIVED = 'archived',
    CANCELED = 'canceled',
    COMPLETED = 'completed',
    DRAFT = 'draft',
    ENDED = 'ended',
    LIVE = 'live',
    STARTED = 'started',
}
