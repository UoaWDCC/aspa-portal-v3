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
 * @interface UpdateFolderRequest
 */
export interface UpdateFolderRequest {
  /**
   * Name of the folder. Can\'t be null or empty.
   * @type {string}
   * @memberof UpdateFolderRequest
   */
  name?: string;
  /**
   * Unique identifier of the parent folder. This allows for nested folders.
   * @type {number}
   * @memberof UpdateFolderRequest
   */
  parent?: number;
}