import { CohostEndpoint } from '../endpoint';
import {
    CartSession,
    UpdatableCartSession,
} from '../../types/index';
import { StartCartSessionInput } from '../types/sessions';

/**
 * Provides methods to interact with cart sessions in the Cohost API.
 *
 * Usage:
 * ```ts
 * const client = new CohostClient({ token: 'your-token' });
 * const session = await client.sessions.start({ contextId: 'evt_abc123' });
 * ```
 */
export class SessionsAPI extends CohostEndpoint {


    /**
     * Start a new cart session.
     *
     * @param input - Data to start the session
     * @returns {CartSession} The latest cart session
     * 
     * @throws Will throw an error if the request fails
     */
    async start(input: StartCartSessionInput) {
        return this.request<CartSession>('/cart/sessions', {
            method: 'POST',
            data: input,
        });
    }

    /**
     * Get a cart session by its ID.
     *
     * @param id - The unique session ID
     * @returns {CartSession} The latest cart session
     * 
     * @throws Will throw an error if the session is not found or request fails
     */
    async get(id: string) {
        return this.request<CartSession>(`/cart/sessions/${id}`);
    }

    /**
     * Update a cart session.
     *
     * @param id - The ID of the session to update
     * @param input - Data to update the session
     * @returns {CartSession} The latest cart session
     * 
     * @throws Will throw an error if the update fails
     */
    async update(id: string, input: UpdatableCartSession) {
        return this.request<CartSession>(`/cart/sessions/${id}`, {
            method: 'PATCH',
            data: input,
        });
    }

    /**
     * Cancel (soft delete) a cart session.
     *
     * @param id - The ID of the session to cancel
     * @returns Nothing if successful
     * @throws Will throw an error if the cancel operation fails
     */
    async cancel(id: string) {
        return this.request<void>(`/cart/sessions/${id}`, {
            method: 'DELETE',
        });
    }



    /**
     * Update an item in the cart session.
     *
     * @param sessionId - The ID of the session
     * @param props - Properties to update
     * @returns {CartSession} The latest cart session
     * 
     * @throws Will throw an error if the update fails
     */
    async updateItem(sessionId: string, props: {
        offeringId: string;
        quantity: number;
    }) {
        return this.request<CartSession>(`/cart/sessions/${sessionId}/item`, {
            method: 'POST',
        });
    }

    /**
     * Remove an item from the cart session.
     * The same as setting the quantity to 0.
     * 
     * @param sessionId 
     * @param offeringId 
     * @returns {CartSession} The latest cart session
     */
    async deleteItem(sessionId: string, offeringId: string) {
        return this.updateItem(sessionId, {
            offeringId,
            quantity: 0,
        });
    }

}
