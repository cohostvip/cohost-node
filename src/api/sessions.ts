import { CartSession, UpdatableCartSession } from '../../types';
import { CohostEndpoint } from '../endpoint';
import { FindTablesProps, StartCartSessionInput, ViableTableOption } from '../types/sessions';

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
    async update(id: string, input: Partial<UpdatableCartSession>) {
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
        itemId: string;
        quantity: number;
        options?: {
            [key: string]: any;
        };
    }) {
        return this.request<CartSession>(`/cart/sessions/${sessionId}/item`, {
            method: 'POST',
            data: props,
        });
    }


    /**
     * Pre-validate and prepare the cart session for checkout.
     * @param sessionId 
     */
    async preValidate(sessionId: string, data: any) {
        return this.request<CartSession>(`/cart/sessions/${sessionId}/payment/pre-validate`, {
            method: 'POST',
            data: data,
        });
    }


    /**
     * Close the cart session, and place the order.
     * 
     * @param sessionId - The ID of the session
     * @param data - Data to place the order
     * @returns {CartSession} The latest cart session
     * 
     * @throws Will throw an error if the order placement fails
     */
    async placeOrder(sessionId: string, data: any) {
        return this.request<CartSession>(`/cart/sessions/${sessionId}/place-order`, {
            method: 'POST',
            data: data,
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
    async deleteItem(sessionId: string, itemId: string) {
        return this.updateItem(sessionId, {
            itemId,
            quantity: 0,
        });
    }


    async findTables(id: string, props: FindTablesProps): Promise<ViableTableOption[]> {
        return this.request<ViableTableOption[]>(`/cart/tables/find-tables/${id}`, {
            query: {
                ...props,
            }
        });
    }

}
