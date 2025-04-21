/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OfferingCosts } from './OfferingCosts';
import type { OfferingType } from './OfferingType';
export type OrderItemOffering = {
    costs: OfferingCosts;
    /**
     * doc assicated with this offering in the DB.
     */
    docPath: string;
    /**
     * Offering name, can be ticket name, vaucher name, etc...
     */
    name: string;
    type: OfferingType;
};

