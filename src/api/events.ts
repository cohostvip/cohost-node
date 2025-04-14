// src/api/EventsAPI.ts

import { CohostEndpoint } from '../endpoint';

/**
 * Provides methods to interact with the Cohost Events API.
 * 
 * Usage:
 * ```ts
 * const client = new CohostClient({ token: 'your-token' });
 * const event = await client.events.fetch('event-id');
 * const tickets = await client.events.tickets('event-id');
 * ```
 */
export class EventsAPI extends CohostEndpoint {
  /**
   * Fetch a single event by ID.
   * 
   * @param id - The unique identifier of the event
   * @returns A Promise resolving to the event object
   * @throws Will throw an error if the request fails or the event is not found
   */
  async fetch(id: string) {
    return this.request(`/events/${id}`);
  }

  /**
   * List all tickets associated with a specific event.
   * 
   * @param id - The unique identifier of the event
   * @returns A Promise resolving to an array of ticket objects
   * @throws Will throw an error if the request fails or the event does not exist
   */
  async tickets(id: string) {
    return this.request(`/events/${id}/tickets`);
  }
}
