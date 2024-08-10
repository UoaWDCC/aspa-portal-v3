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
import type { Users } from './users';

/**
 * 
 * @export
 * @interface UpdateUsersRequest
 */
export interface UpdateUsersRequest {
    /**
     * 
     * @type {Users}
     * @memberof UpdateUsersRequest
     */
    'data'?: Users;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateUsersRequest
     */
    'keys'?: Array<string>;
}

