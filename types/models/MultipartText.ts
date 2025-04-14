/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A rich content object that supports multiple representations of text.
 */
export type MultipartText = {
    /**
     * Optional rich editor blocks (if structured editing is supported).
     */
    blocks?: Array<any>;
    /**
     * HTML version of the content.
     */
    html?: string;
    /**
     * Markdown version of the content.
     */
    md?: string;
    /**
     * Plain text version of the content.
     */
    text?: string;
};

