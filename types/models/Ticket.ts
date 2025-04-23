/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OfferingCosts } from './OfferingCosts';
import type { OfferingStatus } from './OfferingStatus';
import type { PackageInclude } from './PackageInclude';
import type { PriceCategory } from './PriceCategory';
export type Ticket = {
    /**
     * The maximum number of tickets that can be sold for this offering.
     */
    capacity: number;
    category: string;
    /**
     * ISO 8601 timestamp indicating when the record was last updated, if applicable.
     */
    changed?: string;
    costs: OfferingCosts;
    /**
     * ISO 8601 timestamp indicating when the record was created.
     */
    created: string;
    description?: string;
    display_name?: string;
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
    parentId?: string;
    priceCategory: PriceCategory;
    quantitySold: number;
    refId?: string;
    salesEnd: string;
    salesStart: string;
    sorting: number;
    source: string;
    status: OfferingStatus;
    ticketParentId?: string;
    type: Ticket.type;
};
export namespace Ticket {
    export enum type {
        ADMISSION = 'admission',
        ADMISSION_TABLE_COMMITMENT = 'admission.tableCommitment',
        PACKAGE = 'package',
    }
}

