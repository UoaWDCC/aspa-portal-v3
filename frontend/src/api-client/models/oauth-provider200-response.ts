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
import type { OauthProvider200ResponseData } from "./oauth-provider200-response-data";

/**
 *
 * @export
 * @interface OauthProvider200Response
 */
export interface OauthProvider200Response {
  /**
   *
   * @type {boolean}
   * @memberof OauthProvider200Response
   */
  public?: boolean;
  /**
   *
   * @type {OauthProvider200ResponseData}
   * @memberof OauthProvider200Response
   */
  data?: OauthProvider200ResponseData;
}