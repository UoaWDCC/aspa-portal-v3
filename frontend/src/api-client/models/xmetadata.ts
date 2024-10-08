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
 * @interface XMetadata
 */
export interface XMetadata {
  /**
   * Returns the total item count of the collection you\'re querying.
   * @type {number}
   * @memberof XMetadata
   */
  total_count?: number;
  /**
   * Returns the item count of the collection you\'re querying, taking the current filter/search parameters into account.
   * @type {number}
   * @memberof XMetadata
   */
  filter_count?: number;
}
