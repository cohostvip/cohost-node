/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CalculatedCostComponent } from './CalculatedCostComponent';
import type { OfferingType } from './OfferingType';
import type { OrderItemCosts } from './OrderItemCosts';
import type { OrderItemOffering } from './OrderItemOffering';
export type Partial_OrderItem_ = {
    /**
     * Breakdown of cost components (e.g., base, service fee, delivery).
     */
    costComponents?: Array<CalculatedCostComponent>;
    costs?: OrderItemCosts;
    /**
     * Unique ID for this order item.
     */
    id?: string;
    /**
     * If this item is included as part of a package, this is the ID of the parent item.
     * Otherwise, null.
     */
    includedWithItemId?: string;
    /**
     * Any relevant metadata associated with this item.
     * This can include custom fields or additional information.
     */
    meta?: any;
    offering?: OrderItemOffering;
    /**
     * ID of the offering purchased.
     */
    offeringId?: string;
    offeringType?: OfferingType;
    /**
     * Quantity purchased of this item.
     */
    quantity?: number;
};

