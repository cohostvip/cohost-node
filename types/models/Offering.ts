/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CostComponent } from './CostComponent';
import type { OfferingCosts } from './OfferingCosts';
import type { OfferingStatus } from './OfferingStatus';
import type { OfferingType } from './OfferingType';
import type { PackageInclude } from './PackageInclude';
import type { PriceCategory } from './PriceCategory';
import type { Schedule } from './Schedule';
export type Offering = {
    capacity: number;
    /**
     * ISO 8601 timestamp indicating when the record was last updated, if applicable.
     */
    changed?: string;
    /**
     * Any constraints that apply to this offering.
     * it can be time limit, quantity limit, etc...
     */
    constraints?: any;
    /**
     * Describe fees and other costs associated with purchasing tickets
     * to this offering
     *
     * --@schema array(z.any()).optional()
     */
    costComponents?: Array<CostComponent>;
    costs: OfferingCosts;
    /**
     * ISO 8601 timestamp indicating when the record was created.
     */
    created: string;
    description?: string;
    hidden: boolean;
    /**
     * Unique identifier for the record.
     */
    id: string;
    included?: Array<PackageInclude>;
    instructions?: string;
    maximumQuantity: number;
    minimumQuantity: number;
    /**
     * Offering name, can be ticket name, vaucher name, etc...
     */
    name: string;
    order_confirmation_message?: string;
    package?: boolean;
    priceCategory: PriceCategory;
    quantitySold: number;
    schedule?: Schedule;
    sorting: number;
    status: OfferingStatus;
    type: OfferingType;
};

