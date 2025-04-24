/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CouponSummary } from './CouponSummary';
import type { Partial_Customer_ } from './Partial_Customer_';
import type { Partial_OrderContext_ } from './Partial_OrderContext_';
import type { Partial_OrderItem_ } from './Partial_OrderItem_';
/**
 * Represents a temporary or persisted cart before order placement.
 * Focuses on user intent and checkout prep, not post-purchase records.
 */
export type CartSession = {
    /**
     * ISO 8601 timestamp indicating when the record was last updated, if applicable.
     */
    changed?: string;
    
    context: Partial_OrderContext_;
    /**
     * Namespaced identifier indicating what the order is associated with.
     * Format: "{type}_{id}", where type is "evt", "ven", or "org".
     */
    contextId: string;
    /**
     * Estimated totals based on current cart state.
     * These values are subject to recalculation before checkout.
     */
    costs?: {
        /**
         * A string representing a currency amount in the format `"USD,1000"` where:
         * - `"USD"` is the 3-letter ISO currency code.
         * - The number after the comma represents the value in **minor units** (e.g., cents for USD).
         *
         * For example, `"USD,1000"` equals $10.00 (i.e., 1000 cents).
         */
        delivery: string;
        /**
         * A string representing a currency amount in the format `"USD,1000"` where:
         * - `"USD"` is the 3-letter ISO currency code.
         * - The number after the comma represents the value in **minor units** (e.g., cents for USD).
         *
         * For example, `"USD,1000"` equals $10.00 (i.e., 1000 cents).
         */
        discount: string;
        /**
         * A string representing a currency amount in the format `"USD,1000"` where:
         * - `"USD"` is the 3-letter ISO currency code.
         * - The number after the comma represents the value in **minor units** (e.g., cents for USD).
         *
         * For example, `"USD,1000"` equals $10.00 (i.e., 1000 cents).
         */
        fee: string;
        /**
         * A string representing a currency amount in the format `"USD,1000"` where:
         * - `"USD"` is the 3-letter ISO currency code.
         * - The number after the comma represents the value in **minor units** (e.g., cents for USD).
         *
         * For example, `"USD,1000"` equals $10.00 (i.e., 1000 cents).
         */
        subtotal: string;
        /**
         * A string representing a currency amount in the format `"USD,1000"` where:
         * - `"USD"` is the 3-letter ISO currency code.
         * - The number after the comma represents the value in **minor units** (e.g., cents for USD).
         *
         * For example, `"USD,1000"` equals $10.00 (i.e., 1000 cents).
         */
        tax: string;
        /**
         * A string representing a currency amount in the format `"USD,1000"` where:
         * - `"USD"` is the 3-letter ISO currency code.
         * - The number after the comma represents the value in **minor units** (e.g., cents for USD).
         *
         * For example, `"USD,1000"` equals $10.00 (i.e., 1000 cents).
         */
        total: string;
    };
    /**
     * List of applied coupons used in the order.
     * Supports multiple entries based on organizer preferences.
     */
    coupons?: Array<CouponSummary>;
    /**
     * ISO 8601 timestamp indicating when the record was created.
     */
    created: string;
    /**
     * The currency code used for this order in ISO 4217 format.
     */
    currency: string;
    customer?: Partial_Customer_;
    /**
     * Partner-forwarded data (e.g. utm, session metadata).
     */
    forwarded?: any;
    /**
     * Unique identifier for the record.
     */
    id: string;
    /**
     * Items the user has added to their cart.
     */
    items: Array<Partial_OrderItem_>;
    /**
     * Internal metadata, flags, debug hints, or experimental context.
     */
    meta: Record<string, any>;
    /**
     * Stripe PaymentIntent client secret, used by frontend (e.g. Stripe.js).
     * Required for completing the payment flow.
     */
    paymentIntentClientSecret?: string;
    /**
     * Stripe PaymentIntent ID linked to this cart, if created.
     * Used for confirming payment on the backend.
     */
    paymentIntentId?: string;
    status: CartSession.status;
    /**
     * Authenticated user ID, if available.
     */
    uid: string;
    /**
     * Schema version identifier for this record.
     * Helps manage compatibility across client-server contracts.
     */
    version: string;
};
export namespace CartSession {
    export enum status {
        ABANDONED = 'abandoned',
        CANCELLED = 'cancelled',
        COMPLETED = 'completed',
        STARTED = 'started',
    }
}

