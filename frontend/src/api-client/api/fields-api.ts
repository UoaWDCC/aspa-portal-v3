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

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  type RequestArgs,
  BaseAPI,
  RequiredError,
  operationServerMap,
} from "../base";
// @ts-ignore
import type { CreateField200Response } from "../models";
// @ts-ignore
import type { CreateFieldRequest } from "../models";
// @ts-ignore
import type { GetAsset404Response } from "../models";
// @ts-ignore
import type { GetFields200Response } from "../models";
// @ts-ignore
import type { UpdateFieldRequest } from "../models";
/**
 * FieldsApi - axios parameter creator
 * @export
 */
export const FieldsApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * Create a new field in a given collection.
     * @summary Create Field in Collection
     * @param {string} collection Unique identifier of the collection the item resides in.
     * @param {CreateFieldRequest} [createFieldRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createField: async (
      collection: string,
      createFieldRequest?: CreateFieldRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'collection' is not null or undefined
      assertParamExists("createField", "collection", collection);
      const localVarPath = `/fields/{collection}`.replace(
        `{${"collection"}}`,
        encodeURIComponent(String(collection)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        createFieldRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Delete an existing field.
     * @summary Delete a Field
     * @param {string} collection Unique identifier of the collection the item resides in.
     * @param {string} id Unique identifier of the field.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteField: async (
      collection: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'collection' is not null or undefined
      assertParamExists("deleteField", "collection", collection);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteField", "id", id);
      const localVarPath = `/fields/{collection}/{id}`
        .replace(`{${"collection"}}`, encodeURIComponent(String(collection)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Retrieves the details of a single field in a given collection.
     * @summary Retrieve a Field
     * @param {string} collection Unique identifier of the collection the item resides in.
     * @param {string} id Unique identifier of the field.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollectionField: async (
      collection: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'collection' is not null or undefined
      assertParamExists("getCollectionField", "collection", collection);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getCollectionField", "id", id);
      const localVarPath = `/fields/{collection}/{id}`
        .replace(`{${"collection"}}`, encodeURIComponent(String(collection)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Returns a list of the fields available in the given collection.
     * @summary List Fields in Collection
     * @param {string} collection Unique identifier of the collection the item resides in.
     * @param {Array<string>} [sort] How to sort the returned items. &#x60;sort&#x60; is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (&#x60; - &#x60;) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a &#x60; ? &#x60; to sort randomly.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollectionFields: async (
      collection: string,
      sort?: Array<string>,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'collection' is not null or undefined
      assertParamExists("getCollectionFields", "collection", collection);
      const localVarPath = `/fields/{collection}`.replace(
        `{${"collection"}}`,
        encodeURIComponent(String(collection)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (sort) {
        localVarQueryParameter["sort"] = sort.join(COLLECTION_FORMATS.csv);
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Returns a list of the fields available in the project.
     * @summary List All Fields
     * @param {number} [limit] A limit on the number of objects that are returned.
     * @param {Array<string>} [sort] How to sort the returned items. &#x60;sort&#x60; is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (&#x60; - &#x60;) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a &#x60; ? &#x60; to sort randomly.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFields: async (
      limit?: number,
      sort?: Array<string>,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/fields`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (limit !== undefined) {
        localVarQueryParameter["limit"] = limit;
      }

      if (sort) {
        localVarQueryParameter["sort"] = sort.join(COLLECTION_FORMATS.csv);
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Update an existing field.
     * @summary Update a Field
     * @param {string} collection Unique identifier of the collection the item resides in.
     * @param {string} id Unique identifier of the field.
     * @param {UpdateFieldRequest} [updateFieldRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateField: async (
      collection: string,
      id: string,
      updateFieldRequest?: UpdateFieldRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'collection' is not null or undefined
      assertParamExists("updateField", "collection", collection);
      // verify required parameter 'id' is not null or undefined
      assertParamExists("updateField", "id", id);
      const localVarPath = `/fields/{collection}/{id}`
        .replace(`{${"collection"}}`, encodeURIComponent(String(collection)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PATCH",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        updateFieldRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * FieldsApi - functional programming interface
 * @export
 */
export const FieldsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = FieldsApiAxiosParamCreator(configuration);
  return {
    /**
     * Create a new field in a given collection.
     * @summary Create Field in Collection
     * @param {string} collection Unique identifier of the collection the item resides in.
     * @param {CreateFieldRequest} [createFieldRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createField(
      collection: string,
      createFieldRequest?: CreateFieldRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<CreateField200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createField(
        collection,
        createFieldRequest,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FieldsApi.createField"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Delete an existing field.
     * @summary Delete a Field
     * @param {string} collection Unique identifier of the collection the item resides in.
     * @param {string} id Unique identifier of the field.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteField(
      collection: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteField(
        collection,
        id,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FieldsApi.deleteField"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Retrieves the details of a single field in a given collection.
     * @summary Retrieve a Field
     * @param {string} collection Unique identifier of the collection the item resides in.
     * @param {string} id Unique identifier of the field.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCollectionField(
      collection: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<CreateField200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCollectionField(
          collection,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FieldsApi.getCollectionField"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Returns a list of the fields available in the given collection.
     * @summary List Fields in Collection
     * @param {string} collection Unique identifier of the collection the item resides in.
     * @param {Array<string>} [sort] How to sort the returned items. &#x60;sort&#x60; is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (&#x60; - &#x60;) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a &#x60; ? &#x60; to sort randomly.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCollectionFields(
      collection: string,
      sort?: Array<string>,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetFields200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCollectionFields(
          collection,
          sort,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FieldsApi.getCollectionFields"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Returns a list of the fields available in the project.
     * @summary List All Fields
     * @param {number} [limit] A limit on the number of objects that are returned.
     * @param {Array<string>} [sort] How to sort the returned items. &#x60;sort&#x60; is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (&#x60; - &#x60;) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a &#x60; ? &#x60; to sort randomly.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getFields(
      limit?: number,
      sort?: Array<string>,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetFields200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getFields(
        limit,
        sort,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FieldsApi.getFields"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Update an existing field.
     * @summary Update a Field
     * @param {string} collection Unique identifier of the collection the item resides in.
     * @param {string} id Unique identifier of the field.
     * @param {UpdateFieldRequest} [updateFieldRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateField(
      collection: string,
      id: string,
      updateFieldRequest?: UpdateFieldRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<CreateField200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateField(
        collection,
        id,
        updateFieldRequest,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FieldsApi.updateField"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * FieldsApi - factory interface
 * @export
 */
export const FieldsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = FieldsApiFp(configuration);
  return {
    /**
     * Create a new field in a given collection.
     * @summary Create Field in Collection
     * @param {string} collection Unique identifier of the collection the item resides in.
     * @param {CreateFieldRequest} [createFieldRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createField(
      collection: string,
      createFieldRequest?: CreateFieldRequest,
      options?: any,
    ): AxiosPromise<CreateField200Response> {
      return localVarFp
        .createField(collection, createFieldRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete an existing field.
     * @summary Delete a Field
     * @param {string} collection Unique identifier of the collection the item resides in.
     * @param {string} id Unique identifier of the field.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteField(
      collection: string,
      id: string,
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .deleteField(collection, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Retrieves the details of a single field in a given collection.
     * @summary Retrieve a Field
     * @param {string} collection Unique identifier of the collection the item resides in.
     * @param {string} id Unique identifier of the field.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollectionField(
      collection: string,
      id: string,
      options?: any,
    ): AxiosPromise<CreateField200Response> {
      return localVarFp
        .getCollectionField(collection, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns a list of the fields available in the given collection.
     * @summary List Fields in Collection
     * @param {string} collection Unique identifier of the collection the item resides in.
     * @param {Array<string>} [sort] How to sort the returned items. &#x60;sort&#x60; is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (&#x60; - &#x60;) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a &#x60; ? &#x60; to sort randomly.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollectionFields(
      collection: string,
      sort?: Array<string>,
      options?: any,
    ): AxiosPromise<GetFields200Response> {
      return localVarFp
        .getCollectionFields(collection, sort, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns a list of the fields available in the project.
     * @summary List All Fields
     * @param {number} [limit] A limit on the number of objects that are returned.
     * @param {Array<string>} [sort] How to sort the returned items. &#x60;sort&#x60; is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (&#x60; - &#x60;) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a &#x60; ? &#x60; to sort randomly.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFields(
      limit?: number,
      sort?: Array<string>,
      options?: any,
    ): AxiosPromise<GetFields200Response> {
      return localVarFp
        .getFields(limit, sort, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Update an existing field.
     * @summary Update a Field
     * @param {string} collection Unique identifier of the collection the item resides in.
     * @param {string} id Unique identifier of the field.
     * @param {UpdateFieldRequest} [updateFieldRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateField(
      collection: string,
      id: string,
      updateFieldRequest?: UpdateFieldRequest,
      options?: any,
    ): AxiosPromise<CreateField200Response> {
      return localVarFp
        .updateField(collection, id, updateFieldRequest, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * FieldsApi - object-oriented interface
 * @export
 * @class FieldsApi
 * @extends {BaseAPI}
 */
export class FieldsApi extends BaseAPI {
  /**
   * Create a new field in a given collection.
   * @summary Create Field in Collection
   * @param {string} collection Unique identifier of the collection the item resides in.
   * @param {CreateFieldRequest} [createFieldRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FieldsApi
   */
  public createField(
    collection: string,
    createFieldRequest?: CreateFieldRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return FieldsApiFp(this.configuration)
      .createField(collection, createFieldRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Delete an existing field.
   * @summary Delete a Field
   * @param {string} collection Unique identifier of the collection the item resides in.
   * @param {string} id Unique identifier of the field.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FieldsApi
   */
  public deleteField(
    collection: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) {
    return FieldsApiFp(this.configuration)
      .deleteField(collection, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Retrieves the details of a single field in a given collection.
   * @summary Retrieve a Field
   * @param {string} collection Unique identifier of the collection the item resides in.
   * @param {string} id Unique identifier of the field.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FieldsApi
   */
  public getCollectionField(
    collection: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) {
    return FieldsApiFp(this.configuration)
      .getCollectionField(collection, id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns a list of the fields available in the given collection.
   * @summary List Fields in Collection
   * @param {string} collection Unique identifier of the collection the item resides in.
   * @param {Array<string>} [sort] How to sort the returned items. &#x60;sort&#x60; is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (&#x60; - &#x60;) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a &#x60; ? &#x60; to sort randomly.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FieldsApi
   */
  public getCollectionFields(
    collection: string,
    sort?: Array<string>,
    options?: RawAxiosRequestConfig,
  ) {
    return FieldsApiFp(this.configuration)
      .getCollectionFields(collection, sort, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns a list of the fields available in the project.
   * @summary List All Fields
   * @param {number} [limit] A limit on the number of objects that are returned.
   * @param {Array<string>} [sort] How to sort the returned items. &#x60;sort&#x60; is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (&#x60; - &#x60;) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a &#x60; ? &#x60; to sort randomly.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FieldsApi
   */
  public getFields(
    limit?: number,
    sort?: Array<string>,
    options?: RawAxiosRequestConfig,
  ) {
    return FieldsApiFp(this.configuration)
      .getFields(limit, sort, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update an existing field.
   * @summary Update a Field
   * @param {string} collection Unique identifier of the collection the item resides in.
   * @param {string} id Unique identifier of the field.
   * @param {UpdateFieldRequest} [updateFieldRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FieldsApi
   */
  public updateField(
    collection: string,
    id: string,
    updateFieldRequest?: UpdateFieldRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return FieldsApiFp(this.configuration)
      .updateField(collection, id, updateFieldRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
