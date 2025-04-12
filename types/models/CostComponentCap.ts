/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CostComponentCap = {
    op: string;
    type: CostComponentCap.type;
    /**
     * The value of the cap. If type is percentage, it is a percentage of the base value.
     * If type is absolute, it is an absolute value.
     *
     * Absolute value is represented in the same denomination as the cost.
     * i.e. if the cost is in cents, the absolute value should be in cents.
     *
     * percentage value is represented as a decimal.
     * For example, 10% is represented as 0.1.
     */
    value: number;
};
export namespace CostComponentCap {
    export enum type {
        ABSOLUTE = 'absolute',
        PERCENTAGE = 'percentage',
    }
}

