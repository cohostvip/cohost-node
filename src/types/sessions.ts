import { Customer } from "../../types";

export interface StartCartSessionInput {
    contextId: string;
    userAgent?: string;
    referrer?: string;
    ipAddresses?: string[];
}


export interface UpdatableCartSession {
    customer?: Partial<Customer>;
}