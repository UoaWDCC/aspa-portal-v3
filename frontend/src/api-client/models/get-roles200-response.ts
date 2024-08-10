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
import type { Roles } from "./roles";
// May contain unused imports in some cases
// @ts-ignore
import type { XMetadata } from "./xmetadata";

/**
 *
 * @export
 * @interface GetRoles200Response
 */
export interface GetRoles200Response {
  /**
   *
   * @type {Array<Roles>}
   * @memberof GetRoles200Response
   */
  data?: Array<Roles>;
  /**
   *
   * @type {XMetadata}
   * @memberof GetRoles200Response
   */
  meta?: XMetadata;
}
