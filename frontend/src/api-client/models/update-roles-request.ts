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
import type { CreateRoleRequest } from "./create-role-request";

/**
 *
 * @export
 * @interface UpdateRolesRequest
 */
export interface UpdateRolesRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof UpdateRolesRequest
   */
  keys?: Array<string>;
  /**
   *
   * @type {CreateRoleRequest}
   * @memberof UpdateRolesRequest
   */
  data?: CreateRoleRequest;
}
