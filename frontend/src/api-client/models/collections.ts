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
import type { CollectionsGroup } from "./collections-group";

/**
 *
 * @export
 * @interface Collections
 */
export interface Collections {
  /**
   * The collection key.
   * @type {string}
   * @memberof Collections
   */
  collection?: string;
  /**
   *
   * @type {string}
   * @memberof Collections
   */
  icon?: string | null;
  /**
   *
   * @type {string}
   * @memberof Collections
   */
  note?: string | null;
  /**
   *
   * @type {string}
   * @memberof Collections
   */
  display_template?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof Collections
   */
  hidden?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Collections
   */
  singleton?: boolean;
  /**
   *
   * @type {any}
   * @memberof Collections
   */
  translations?: any | null;
  /**
   *
   * @type {string}
   * @memberof Collections
   */
  archive_field?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof Collections
   */
  archive_app_filter?: boolean;
  /**
   *
   * @type {string}
   * @memberof Collections
   */
  archive_value?: string | null;
  /**
   *
   * @type {string}
   * @memberof Collections
   */
  unarchive_value?: string | null;
  /**
   *
   * @type {string}
   * @memberof Collections
   */
  sort_field?: string | null;
  /**
   *
   * @type {string}
   * @memberof Collections
   */
  accountability?: string | null;
  /**
   *
   * @type {string}
   * @memberof Collections
   */
  color?: string | null;
  /**
   *
   * @type {any}
   * @memberof Collections
   */
  item_duplication_fields?: any | null;
  /**
   *
   * @type {number}
   * @memberof Collections
   */
  sort?: number | null;
  /**
   *
   * @type {CollectionsGroup}
   * @memberof Collections
   */
  group?: CollectionsGroup | null;
  /**
   *
   * @type {string}
   * @memberof Collections
   */
  collapse?: string;
  /**
   *
   * @type {string}
   * @memberof Collections
   */
  preview_url?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof Collections
   */
  versioning?: boolean;
}