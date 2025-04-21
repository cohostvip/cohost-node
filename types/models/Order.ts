/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CouponSummary } from './CouponSummary';
import type { Customer } from './Customer';
import type { OrderContext } from './OrderContext';
import type { OrderCosts } from './OrderCosts';
import type { OrderItem } from './OrderItem';
import type { OrderStatus } from './OrderStatus';
/**
 * Represents an order in the system.
 */
export type Order = {
    /**
     * Agreement flags for terms and marketing opt-ins.
     */
    agreements: {
        /**
         * Whether the customer accepted the organizer’s custom terms.
         */
        agreedToOrganizerTerms?: boolean;
        /**
         * Whether the customer accepted the platform-wide terms of service.
         */
        agreedToTerms?: boolean;
        /**
         * Whether the customer opted in to receive marketing emails.
         */
        emailOptIn?: boolean;
        /**
         * Whether the customer opted in to receive marketing SMS messages.
         */
        textOptIn?: boolean;
    };
    /**
     * Responses to dynamic questions during checkout (e.g. survey or registration).
     */
    answers: Record<string, string | boolean>;
    /**
     * ISO 8601 timestamp indicating when the record was last updated, if applicable.
     */
    changed?: string;
    companyId: string;
    context: OrderContext;
    /**
     * Namespaced identifier indicating what the order is associated with.
     * Format: "{type}_{id}", where type is "evt", "ven", or "org".
     */
    contextId: string;
    costs: OrderCosts;
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
    customer: Customer;
    /**
     * Freeform object containing metadata forwarded from the partner site
     * or embedding context. Can include UTM tags, user traits, campaign IDs, etc.
     */
    forwarded: any;
    /**
     * Unique identifier for the record.
     */
    id: string;
    /**
     * A list of individual items included in the order.
     */
    items: Array<OrderItem>;
    /**
     * Internal or computed metadata associated with the order.
     * May include fulfillment flags, debugging info, or derived calculations.
     */
    meta: any;
    /**
     * Human-readable order number for customer reference.
     * Often used in emails and receipts.
     */
    orderNumber: string;
    status: OrderStatus;
    /**
     * Schema version identifier for this record.
     * Helps manage compatibility across client-server contracts.
     */
    version: string;
};

