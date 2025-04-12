/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents the costs associated with an offering.
 */
export type OfferingCosts = {
    cost: string;
    delivery: string;
    fee: string;
    /**
     * cost + fee - discount , not including tax
     */
    gross: string;
    tax: string;
    /**
     * total cost including tax
     */
    total: string;
};

