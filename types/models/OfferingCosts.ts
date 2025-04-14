/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents the costs associated with an offering.
 */
export type OfferingCosts = {
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

