/* tslint:disable */
/* eslint-disable */
/**
 * Dynamic API Specification
 * This is a dynamically generated API specification for all endpoints existing on the current project.
 *
 * The version of the OpenAPI document: 10.13.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CreateFileRequest } from './create-file-request';

/**
 * 
 * @export
 * @interface UpdateFilesRequest
 */
export interface UpdateFilesRequest {
    /**
     * 
     * @type {CreateFileRequest}
     * @memberof UpdateFilesRequest
     */
    'data'?: CreateFileRequest;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateFilesRequest
     */
    'keys'?: Array<string>;
}

