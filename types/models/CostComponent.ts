/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CostBucket } from './CostBucket';
import type { CostComponentCap } from './CostComponentCap';
import type { CostComponentRule } from './CostComponentRule';
import type { CostOp } from './CostOp';
export type CostComponent = {
    base: string;
    bucket: CostBucket;
    cap?: CostComponentCap;
    currency: string;
    details?: any;
    id?: string;
    name: string;
    ops: Array<CostOp>;
    payer: CostComponent.payer;
    recipient: string;
    rules: Array<CostComponentRule>;
    version: string;
};
export namespace CostComponent {
    export enum payer {
        ATTENDEE = 'attendee',
        ORGANIZER = 'organizer',
    }
}

