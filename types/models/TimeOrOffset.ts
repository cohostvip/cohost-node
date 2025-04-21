/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents either an absolute or a relative time constraint.
 *
 * - If using `date`, `secondsBefore` must not be present.
 * - If using `secondsBefore`, `date` must not be present.
 */
export type TimeOrOffset = ({
    /**
     * Absolute time in ISO 8601 format.
     */
    date: string;
} | {
    /**
     * Relative time before an anchor point (e.g. event start), in seconds.
     */
    secondsBefore: number;
});

