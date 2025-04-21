/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimeOrOffset } from './TimeOrOffset';
/**
 * Represents a discount coupon that can be applied to one or more offerings in an event platform.
 */
export type Coupon = {
    /**
     * Fixed amount to deduct from the order total.
     * This is a currency-less value that matches the event or order currency.
     * Example: `10.00` = $10.00 off.
     */
    amountOff: number;
    /**
     * ISO 8601 timestamp indicating when the record was last updated, if applicable.
     */
    changed?: string;
    /**
     * The code used to redeem this coupon during checkout.
     * For public or coded discounts.
     */
    code: string;
    /**
     * ID of the company that issued this coupon.
     */
    companyId: string;
    /**
     * Time-based constraints that control when the coupon is active and when it expires.
     * Supports absolute dates or relative time offsets (in seconds) from event start.
     *
     * - If `start` is omitted, the coupon is valid immediately.
     * - If `end` is omitted, the coupon remains valid until the event ends.
     */
    constraints: {
        end?: TimeOrOffset;
        start?: TimeOrOffset;
    };
    /**
     * List of context IDs (e.g., event, venue, or organizer) this coupon is valid for.
     * Follows the format: "evt_xxx", "org_xxx", etc.
     */
    contextIds: Array<string>;
    /**
     * ISO 8601 timestamp indicating when the record was created.
     */
    created: string;
    /**
     * Internal description for the coupon.
     * This is not necessarily visible to users.
     */
    description: string;
    /**
     * Unique identifier for the record.
     */
    id: string;
    /**
     * Total number of times this coupon can be used.
     * A value of `0` means unlimited usage.
     */
    limit: number;
    /**
     * List of offering IDs (e.g., ticket classes) this coupon applies to.
     * If empty, the coupon applies to all eligible offerings in its context.
     */
    offeringIds: Array<string>;
    /**
     * Percentage to deduct from the item or order total.
     * Range is 0–100. Use 0 for no percentage-based discount.
     */
    percentOff: number;
    /**
     * Number of times this coupon has been redeemed.
     * Read-only field.
     */
    quantitySold: number;
    /**
     * Current status of the coupon for administrative purposes.
     * Determines whether it can be redeemed at checkout.
     */
    status: Coupon.status;
    /**
     * Type of coupon — determines how it's distributed or applied.
     */
    type: Coupon.type;
    /**
     * Schema version identifier.
     * Used to ensure compatibility between coupon formats.
     */
    version: string;
};
export namespace Coupon {
    /**
     * Current status of the coupon for administrative purposes.
     * Determines whether it can be redeemed at checkout.
     */
    export enum status {
        ACTIVE = 'active',
        DISABLED = 'disabled',
        EXPIRED = 'expired',
        SOLD_OUT = 'sold_out',
    }
    /**
     * Type of coupon — determines how it's distributed or applied.
     */
    export enum type {
        ACCESS = 'access',
        CODED = 'coded',
        HOLD = 'hold',
        PUBLIC = 'public',
    }
}

