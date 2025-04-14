/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CostComponentRuleCondition } from './CostComponentRuleCondition';
export type CostComponentRule = {
    /**
     * The rule will be applied to the cost component if the conditions are met.
     */
    conditions: Array<CostComponentRuleCondition>;
    /**
     * Friendly name of the rule.
     */
    name: string;
};

