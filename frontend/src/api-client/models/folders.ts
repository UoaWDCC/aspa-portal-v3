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
import type { FoldersParent } from "./folders-parent";

/**
 *
 * @export
 * @interface Folders
 */
export interface Folders {
  /**
   * Unique identifier for the folder.
   * @type {string}
   * @memberof Folders
   */
  id?: string;
  /**
   * Name of the folder.
   * @type {string}
   * @memberof Folders
   */
  name?: string;
  /**
   *
   * @type {FoldersParent}
   * @memberof Folders
   */
  parent?: FoldersParent | null;
}