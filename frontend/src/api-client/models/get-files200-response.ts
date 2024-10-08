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
import type { Files } from "./files";
// May contain unused imports in some cases
// @ts-ignore
import type { XMetadata } from "./xmetadata";

/**
 *
 * @export
 * @interface GetFiles200Response
 */
export interface GetFiles200Response {
  /**
   *
   * @type {Array<Files>}
   * @memberof GetFiles200Response
   */
  data?: Array<Files>;
  /**
   *
   * @type {XMetadata}
   * @memberof GetFiles200Response
   */
  meta?: XMetadata;
}
