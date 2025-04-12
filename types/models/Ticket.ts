/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CostComponent } from './CostComponent';
import type { OfferingCosts } from './OfferingCosts';
import type { OfferingStatus } from './OfferingStatus';
import type { PackageInclude } from './PackageInclude';
import type { PriceCategory } from './PriceCategory';
import type { Schedule } from './Schedule';
export type Ticket = {
    capacity: number;
    category: string;
    changed?: string;
    /**
     * Describe fees and other costs associated with purchasing tickets
     * to this offering
     */
    costComponents?: Array<CostComponent>;
    costs: OfferingCosts;
    created: string;
    description?: string;
    display_name?: string;
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
    parentId?: string;
    priceCategory: PriceCategory;
    quantitySold: number;
    refId?: string;
    salesEnd: string;
    salesStart: string;
    schedule?: Schedule;
    sorting: number;
    source: string;
    status: OfferingStatus;
    ticketParentId?: string;
    type: Ticket.type;
};
export namespace Ticket {
    export enum type {
        ADMISSION = 'admission',
        PACKAGE = 'package',
    }
}

