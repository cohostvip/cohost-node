/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OfferingCosts } from './OfferingCosts';
import type { OfferingStatus } from './OfferingStatus';
import type { OfferingType } from './OfferingType';
import type { PackageInclude } from './PackageInclude';
import type { PriceCategory } from './PriceCategory';
export type Offering = {
    /**
     * The maximum number of tickets that can be sold for this offering.
     */
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
    /**
     * Items, products ,and vouchers included in this offering.
     */
    included?: Array<PackageInclude>;
    instructions?: string;
    /**
     * Maximum number of tickets that can be purchased in a single order.
     */
    maximumQuantity: number;
    /**
     * Minimum number of tickets that can be purchased in a single order.
     */
    minimumQuantity: number;
    /**
     * Offering name, can be ticket name, vaucher name, etc...
     */
    name: string;
    order_confirmation_message?: string;
    package?: boolean;
    priceCategory: PriceCategory;
    quantitySold: number;
    sorting: number;
    status: OfferingStatus;
    type: OfferingType;
};

