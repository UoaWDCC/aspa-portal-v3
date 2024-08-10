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

/**
 *
 * @export
 * @interface CreateRoleRequest
 */
export interface CreateRoleRequest {
  /**
   * Description of the role.
   * @type {string}
   * @memberof CreateRoleRequest
   */
  description?: string;
  /**
   * Whether or not this role enforces the use of 2FA.
   * @type {boolean}
   * @memberof CreateRoleRequest
   */
  enforce_tfa?: boolean;
  /**
   * ID used with external services in SCIM.
   * @type {string}
   * @memberof CreateRoleRequest
   */
  external_id?: string;
  /**
   * Array of IP addresses that are allowed to connect to the API as a user of this role.
   * @type {Array<string>}
   * @memberof CreateRoleRequest
   */
  ip_access?: Array<string>;
  /**
   * Custom override for the admin app module bar navigation.
   * @type {string}
   * @memberof CreateRoleRequest
   */
  module_listing?: string;
  /**
   * Name of the role.
   * @type {string}
   * @memberof CreateRoleRequest
   */
  name?: string;
}
