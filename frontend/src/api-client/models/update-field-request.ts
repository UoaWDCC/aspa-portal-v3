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
import type { CreateFieldRequestMeta } from "./create-field-request-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { CreateFieldRequestSchema } from "./create-field-request-schema";

/**
 *
 * @export
 * @interface UpdateFieldRequest
 */
export interface UpdateFieldRequest {
  /**
   * Unique name of the field. Field name is unique within the collection.
   * @type {string}
   * @memberof UpdateFieldRequest
   */
  field?: string;
  /**
   * Directus specific data type. Used to cast values in the API.
   * @type {string}
   * @memberof UpdateFieldRequest
   */
  type?: string;
  /**
   *
   * @type {CreateFieldRequestSchema}
   * @memberof UpdateFieldRequest
   */
  schema?: CreateFieldRequestSchema;
  /**
   *
   * @type {CreateFieldRequestMeta}
   * @memberof UpdateFieldRequest
   */
  meta?: CreateFieldRequestMeta | null;
}
