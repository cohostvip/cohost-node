/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Partial_Customer_ } from './Partial_Customer_';
import type { Partial_OrderItem_ } from './Partial_OrderItem_';
export type UpdatableCartSession = {
    customer?: Partial_Customer_;
    /**
     * Items the user has added to their cart.
     */
    items: Array<Partial_OrderItem_>;
};

