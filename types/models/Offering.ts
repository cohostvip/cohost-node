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
    changed?: string;
    /**
     * Any constraints that apply to this offering.
     * it can be time limit, quantity limit, etc...
     */
    constraints: any;
    /**
     * Describe fees and other costs associated with purchasing tickets
     * to this offering
     */
    costComponents?: Array<CostComponent>;
    costs: OfferingCosts;
    created: string;
    description?: string;
    hidden: boolean;
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
    /**
     * Parent doc assicated with this offering in the DB.
     */
    parentPath: string;
    priceCategory: PriceCategory;
    quantitySold: number;
    schedule?: Schedule;
    sorting: number;
    status: OfferingStatus;
    type: OfferingType;
};

