/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeometryPoint } from './GeometryPoint';
export type LocationGeometry = {
    geoHash?: string;
    lat: number;
    lng: number;
    locality?: string;
    region?: string;
    vicinity?: string;
    viewport?: {
        northeast: GeometryPoint;
        southwest: GeometryPoint;
    };
    zoom?: number;
};

