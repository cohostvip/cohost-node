/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EqualOperator } from './EqualOperator';
export type CostComponentRuleCondition = {
    /**
     * evaluator, will define a function or endpoint to evaluate the condition.
     */
    eval?: string;
    /**
     * The field to evaluate the condition against.
     * For example, "item.price" or "order.total".
     * The field should be a valid path to the field in the cost component base.
     */
    field: string;
    operator: EqualOperator;
    /**
     * Can be a value such as number, currencyAmount, an ISO date string, etc...
     */
    value: any;
};

