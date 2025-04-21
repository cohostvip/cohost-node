/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Cost breakdown for a specific item in the order.
 * Extends the standard `OfferingCosts` with totals calculated for quantity and discounts.
 */
export type OrderItemCosts = {
    /**
     * A string representing a currency amount in the format `"USD,1000"` where:
     * - `"USD"` is the 3-letter ISO currency code.
     * - The number after the comma represents the value in **minor units** (e.g., cents for USD).
     *
     * For example, `"USD,1000"` equals $10.00 (i.e., 1000 cents).
     */
    cost: string;
    /**
     * A string representing a currency amount in the format `"USD,1000"` where:
     * - `"USD"` is the 3-letter ISO currency code.
     * - The number after the comma represents the value in **minor units** (e.g., cents for USD).
     *
     * For example, `"USD,1000"` equals $10.00 (i.e., 1000 cents).
     */
    delivery: string;
    /**
     * Total discount amount applied to this item.
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
     * cost + fee - discount , not including tax
     */
    gross: string;
    /**
     * Total price before discounts.
     * Equal to subtotal + fee, before subtracting discount.
     */
    preDiscount: string;
    /**
     * Total cost of tickets before taxes, fees, and discounts.
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
     * total cost including tax
     */
    total: string;
};

