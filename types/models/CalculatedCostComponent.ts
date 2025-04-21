/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CostBucket } from './CostBucket';
export type CalculatedCostComponent = {
    base: string;
    bucket: CostBucket;
    /**
     * A string representing a currency amount in the format `"USD,1000"` where:
     * - `"USD"` is the 3-letter ISO currency code.
     * - The number after the comma represents the value in **minor units** (e.g., cents for USD).
     *
     * For example, `"USD,1000"` equals $10.00 (i.e., 1000 cents).
     */
    cost: string;
    discount: null;
    id: string;
    name: string;
    payer: CalculatedCostComponent.payer;
    recipient: string;
    value: number;
    version: string;
};
export namespace CalculatedCostComponent {
    export enum payer {
        ATTENDEE = 'attendee',
        ORGANIZER = 'organizer',
    }
}

