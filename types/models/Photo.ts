/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A photo object with resolution options and optional metadata.
 */
export type Photo = {
    /**
     * High-resolution (2x) image URL.
     */
    '2x'?: string;
    /**
     * Optional caption for the image.
     */
    caption?: string;
    /**
     * Height of the image in pixels.
     */
    height?: number;
    /**
     * Internal photo ID, if stored in a media system.
     */
    id?: string;
    /**
     * Primary image URL.
     * This is the default image URL to be used when no other resolution is specified.
     */
    url: string;
    /**
     * Width of the image in pixels.
     */
    width?: number;
};

