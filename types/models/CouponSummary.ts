/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CouponSummary = {
    /**
     * Fixed amount to deduct from the order total.
     * This is a currency-less value that matches the event or order currency.
     * Example: `10.00` = $10.00 off.
     */
    amountOff: number;
    /**
     * The code used to redeem this coupon during checkout.
     * For public or coded discounts.
     */
    code: string;
    /**
     * Unique identifier for the record.
     */
    id: string;
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
};

