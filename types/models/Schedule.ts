/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A repeating or structured date schedule for an event or item.
 */
export type Schedule = {
    /**
     * Days of the week (0 = Sunday, 6 = Saturday).
     */
    daysOfWeek?: Array<number>;
    /**
     * ISO-formatted UTC end datetime.
     */
    end: string;
    /**
     * Specific dates to exclude in "YYYY-MM-DD" format.
     */
    excludeDates?: Array<string>;
    /**
     * Specific dates to include in "YYYY-MM-DD" format.
     */
    includeDates?: Array<string>;
    /**
     * ISO-formatted UTC start datetime.
     */
    start: string;
};

