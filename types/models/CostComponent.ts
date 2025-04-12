/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CostBucket } from './CostBucket';
import type { EqualOperator } from './EqualOperator';
export type CostComponent = {
    base: string;
    bucket: CostBucket;
    cap?: {
        op: string;
        type: CostComponent.type;
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
    currency: string;
    details?: any;
    id?: string;
    name: string;
    ops: Array<{
        op: '*' | '+' | '-' | '/';
        /**
         * Absolute values should match the denominator, and denomination of the cost.
         * so if the amount in USD is in cents, the value should be in cents.
         */
        value: number;
    }>;
    payer: CostComponent.payer;
    recipient: string;
    rules: Array<{
        /**
         * The rule will be applied to the cost component if the conditions are met.
         */
        conditions: Array<{
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
        }>;
        /**
         * Friendly name of the rule.
         */
        name: string;
    }>;
    version: string;
};
export namespace CostComponent {
    export enum type {
        ABSOLUTE = 'absolute',
        PERCENTAGE = 'percentage',
    }
    export enum payer {
        ATTENDEE = 'attendee',
        ORGANIZER = 'organizer',
    }
}

