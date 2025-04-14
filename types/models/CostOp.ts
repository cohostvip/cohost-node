/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CostOp = {
    op: CostOp.op;
    /**
     * Absolute values should match the denominator, and denomination of the cost.
     * so if the amount in USD is in cents, the value should be in cents.
     */
    value: number;
};
export namespace CostOp {
    export enum op {
        _ = '*',
        _ = '+',
        _ = '-',
        _ = '/',
    }
}

