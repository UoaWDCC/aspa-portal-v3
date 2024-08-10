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
 * The schema info.
 * @export
 * @interface CreateFieldRequestSchema
 */
export interface CreateFieldRequestSchema {
  /**
   * The name of the field.
   * @type {string}
   * @memberof CreateFieldRequestSchema
   */
  name?: string;
  /**
   * The collection of the field.
   * @type {string}
   * @memberof CreateFieldRequestSchema
   */
  table?: string;
  /**
   * The type of the field.
   * @type {string}
   * @memberof CreateFieldRequestSchema
   */
  type?: string;
  /**
   * The default value of the field.
   * @type {string}
   * @memberof CreateFieldRequestSchema
   */
  default_value?: string | null;
  /**
   * The max length of the field.
   * @type {number}
   * @memberof CreateFieldRequestSchema
   */
  max_length?: number | null;
  /**
   * If the field is nullable.
   * @type {boolean}
   * @memberof CreateFieldRequestSchema
   */
  is_nullable?: boolean;
  /**
   * If the field is primary key.
   * @type {boolean}
   * @memberof CreateFieldRequestSchema
   */
  is_primary_key?: boolean;
  /**
   * If the field has auto increment.
   * @type {boolean}
   * @memberof CreateFieldRequestSchema
   */
  has_auto_increment?: boolean;
  /**
   * Related column from the foreign key constraint.
   * @type {string}
   * @memberof CreateFieldRequestSchema
   */
  foreign_key_column?: string | null;
  /**
   * Related table from the foreign key constraint.
   * @type {string}
   * @memberof CreateFieldRequestSchema
   */
  foreign_key_table?: string | null;
  /**
   * Comment as saved in the database.
   * @type {string}
   * @memberof CreateFieldRequestSchema
   */
  comment?: string | null;
  /**
   * Database schema (pg only).
   * @type {string}
   * @memberof CreateFieldRequestSchema
   */
  schema?: string;
  /**
   * Related schema from the foreign key constraint (pg only).
   * @type {string}
   * @memberof CreateFieldRequestSchema
   */
  foreign_key_schema?: string | null;
}