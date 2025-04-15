/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a cost operation to be applied in a pricing formula.
 */
export type CostOp = {
    /**
     * The operand value used in the cost operation.
     *
     * The unit should match the denomination of the cost.
     * For example, if cost is expressed in cents, this value should also be in cents.
     */
    value: number;
};

