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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { GetAsset404Response } from '../models';
// @ts-ignore
import type { ReadItemsExecutive200Response } from '../models';
// @ts-ignore
import type { ReadSingleItemsEventIdParameter } from '../models';
// @ts-ignore
import type { ReadSingleItemsExecutive200Response } from '../models';
/**
 * ItemsExecutiveApi - axios parameter creator
 * @export
 */
export const ItemsExecutiveApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * List the Executive items.
         * @summary List Items
         * @param {Array<string>} [fields] Control what fields are being returned in the object.
         * @param {number} [limit] A limit on the number of objects that are returned.
         * @param {string} [meta] What metadata to return in the response.
         * @param {number} [offset] How many items to skip when fetching data.
         * @param {Array<string>} [sort] How to sort the returned items. &#x60;sort&#x60; is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (&#x60; - &#x60;) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a &#x60; ? &#x60; to sort randomly. 
         * @param {object} [filter] Select items in collection by given conditions.
         * @param {string} [search] Filter by items that contain the given search query in one of their fields.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readItemsExecutive: async (fields?: Array<string>, limit?: number, meta?: string, offset?: number, sort?: Array<string>, filter?: object, search?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/items/Executive`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Auth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (fields) {
                localVarQueryParameter['fields'] = fields.join(COLLECTION_FORMATS.csv);
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (meta !== undefined) {
                localVarQueryParameter['meta'] = meta;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort.join(COLLECTION_FORMATS.csv);
            }

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a single Executive item by unique identifier.
         * @summary Retrieve an Item
         * @param {ReadSingleItemsEventIdParameter} id Index of the item.
         * @param {Array<string>} [fields] Control what fields are being returned in the object.
         * @param {string} [meta] What metadata to return in the response.
         * @param {string} [version] Retrieve an item\&#39;s state from a specific Content Version. The value corresponds to the \&quot;key\&quot; of the Content Version. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readSingleItemsExecutive: async (id: ReadSingleItemsEventIdParameter, fields?: Array<string>, meta?: string, version?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('readSingleItemsExecutive', 'id', id)
            const localVarPath = `/items/Executive/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fields) {
                localVarQueryParameter['fields'] = fields.join(COLLECTION_FORMATS.csv);
            }

            if (meta !== undefined) {
                localVarQueryParameter['meta'] = meta;
            }

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ItemsExecutiveApi - functional programming interface
 * @export
 */
export const ItemsExecutiveApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ItemsExecutiveApiAxiosParamCreator(configuration)
    return {
        /**
         * List the Executive items.
         * @summary List Items
         * @param {Array<string>} [fields] Control what fields are being returned in the object.
         * @param {number} [limit] A limit on the number of objects that are returned.
         * @param {string} [meta] What metadata to return in the response.
         * @param {number} [offset] How many items to skip when fetching data.
         * @param {Array<string>} [sort] How to sort the returned items. &#x60;sort&#x60; is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (&#x60; - &#x60;) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a &#x60; ? &#x60; to sort randomly. 
         * @param {object} [filter] Select items in collection by given conditions.
         * @param {string} [search] Filter by items that contain the given search query in one of their fields.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readItemsExecutive(fields?: Array<string>, limit?: number, meta?: string, offset?: number, sort?: Array<string>, filter?: object, search?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadItemsExecutive200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.readItemsExecutive(fields, limit, meta, offset, sort, filter, search, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ItemsExecutiveApi.readItemsExecutive']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieve a single Executive item by unique identifier.
         * @summary Retrieve an Item
         * @param {ReadSingleItemsEventIdParameter} id Index of the item.
         * @param {Array<string>} [fields] Control what fields are being returned in the object.
         * @param {string} [meta] What metadata to return in the response.
         * @param {string} [version] Retrieve an item\&#39;s state from a specific Content Version. The value corresponds to the \&quot;key\&quot; of the Content Version. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readSingleItemsExecutive(id: ReadSingleItemsEventIdParameter, fields?: Array<string>, meta?: string, version?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadSingleItemsExecutive200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.readSingleItemsExecutive(id, fields, meta, version, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ItemsExecutiveApi.readSingleItemsExecutive']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ItemsExecutiveApi - factory interface
 * @export
 */
export const ItemsExecutiveApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ItemsExecutiveApiFp(configuration)
    return {
        /**
         * List the Executive items.
         * @summary List Items
         * @param {Array<string>} [fields] Control what fields are being returned in the object.
         * @param {number} [limit] A limit on the number of objects that are returned.
         * @param {string} [meta] What metadata to return in the response.
         * @param {number} [offset] How many items to skip when fetching data.
         * @param {Array<string>} [sort] How to sort the returned items. &#x60;sort&#x60; is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (&#x60; - &#x60;) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a &#x60; ? &#x60; to sort randomly. 
         * @param {object} [filter] Select items in collection by given conditions.
         * @param {string} [search] Filter by items that contain the given search query in one of their fields.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readItemsExecutive(fields?: Array<string>, limit?: number, meta?: string, offset?: number, sort?: Array<string>, filter?: object, search?: string, options?: any): AxiosPromise<ReadItemsExecutive200Response> {
            return localVarFp.readItemsExecutive(fields, limit, meta, offset, sort, filter, search, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a single Executive item by unique identifier.
         * @summary Retrieve an Item
         * @param {ReadSingleItemsEventIdParameter} id Index of the item.
         * @param {Array<string>} [fields] Control what fields are being returned in the object.
         * @param {string} [meta] What metadata to return in the response.
         * @param {string} [version] Retrieve an item\&#39;s state from a specific Content Version. The value corresponds to the \&quot;key\&quot; of the Content Version. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readSingleItemsExecutive(id: ReadSingleItemsEventIdParameter, fields?: Array<string>, meta?: string, version?: string, options?: any): AxiosPromise<ReadSingleItemsExecutive200Response> {
            return localVarFp.readSingleItemsExecutive(id, fields, meta, version, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ItemsExecutiveApi - object-oriented interface
 * @export
 * @class ItemsExecutiveApi
 * @extends {BaseAPI}
 */
export class ItemsExecutiveApi extends BaseAPI {
    /**
     * List the Executive items.
     * @summary List Items
     * @param {Array<string>} [fields] Control what fields are being returned in the object.
     * @param {number} [limit] A limit on the number of objects that are returned.
     * @param {string} [meta] What metadata to return in the response.
     * @param {number} [offset] How many items to skip when fetching data.
     * @param {Array<string>} [sort] How to sort the returned items. &#x60;sort&#x60; is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (&#x60; - &#x60;) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a &#x60; ? &#x60; to sort randomly. 
     * @param {object} [filter] Select items in collection by given conditions.
     * @param {string} [search] Filter by items that contain the given search query in one of their fields.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsExecutiveApi
     */
    public readItemsExecutive(fields?: Array<string>, limit?: number, meta?: string, offset?: number, sort?: Array<string>, filter?: object, search?: string, options?: RawAxiosRequestConfig) {
        return ItemsExecutiveApiFp(this.configuration).readItemsExecutive(fields, limit, meta, offset, sort, filter, search, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a single Executive item by unique identifier.
     * @summary Retrieve an Item
     * @param {ReadSingleItemsEventIdParameter} id Index of the item.
     * @param {Array<string>} [fields] Control what fields are being returned in the object.
     * @param {string} [meta] What metadata to return in the response.
     * @param {string} [version] Retrieve an item\&#39;s state from a specific Content Version. The value corresponds to the \&quot;key\&quot; of the Content Version. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsExecutiveApi
     */
    public readSingleItemsExecutive(id: ReadSingleItemsEventIdParameter, fields?: Array<string>, meta?: string, version?: string, options?: RawAxiosRequestConfig) {
        return ItemsExecutiveApiFp(this.configuration).readSingleItemsExecutive(id, fields, meta, version, options).then((request) => request(this.axios, this.basePath));
    }
}

