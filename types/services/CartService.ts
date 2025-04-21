/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CartSession } from '../models/CartSession';
import type { UpdatableCartSession } from '../models/UpdatableCartSession';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CartService {
    /**
     * Start a new cart session
     * @param requestBody
     * @returns CartSession Cart session started
     * @throws ApiError
     */
    public static postCartSessions(
        requestBody: {
            contextId: string;
            userAgent?: string;
            referrer?: string;
            ipAddresses?: Array<string>;
        },
    ): CancelablePromise<CartSession> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cart/sessions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Server error`,
            },
        });
    }
    /**
     * Get a cart session by ID
     * @param id Cart session ID
     * @returns CartSession Cart session found
     * @throws ApiError
     */
    public static getCartSessions(
        id: string,
    ): CancelablePromise<CartSession> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cart/sessions/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Cart session not found`,
                500: `Server error`,
            },
        });
    }
    /**
     * Update a cart session
     * @param id Cart session ID
     * @param requestBody
     * @returns CartSession Cart session updated
     * @throws ApiError
     */
    public static patchCartSessions(
        id: string,
        requestBody: UpdatableCartSession,
    ): CancelablePromise<CartSession> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/cart/sessions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Cart session not found`,
                500: `Server error`,
            },
        });
    }
    /**
     * Cancel (soft delete) a cart session
     * @param id Cart session ID
     * @returns void
     * @throws ApiError
     */
    public static deleteCartSessions(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/cart/sessions/{id}',
            path: {
                'id': id,
            },
            errors: {
                500: `Server error`,
            },
        });
    }
    /**
     * Add, update, or remove an item (ticket) in a cart session
     * @param id The ID of the cart session
     * @param requestBody
     * @returns CartSession Cart session updated
     * @throws ApiError
     */
    public static postCartSessionsItem(
        id: string,
        requestBody: {
            /**
             * The ID of the item to update
             */
            offeringId: string;
            /**
             * The quantity to set. Use 0 to remove the item
             */
            quantity: number;
        },
    ): CancelablePromise<CartSession> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cart/sessions/{id}/item',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Server error`,
            },
        });
    }
}
