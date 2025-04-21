/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Extension of `DataRecord` for resources returned from RESTful APIs.
 * Includes a schema version to ensure compatibility with evolving formats.
 */
export type VersionedDataRecord = {
    /**
     * ISO 8601 timestamp indicating when the record was last updated, if applicable.
     */
    changed?: string;
    /**
     * ISO 8601 timestamp indicating when the record was created.
     */
    created: string;
    /**
     * Unique identifier for the record.
     */
    id: string;
    /**
     * Schema version identifier for this record.
     * Helps manage compatibility across client-server contracts.
     */
    version: string;
};

