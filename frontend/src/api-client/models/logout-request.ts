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
 * @interface LogoutRequest
 */
export interface LogoutRequest {
    /**
     * The refresh token to invalidate. If you have the refresh token in a cookie through /auth/login, you don\'t have to submit it here.
     * @type {string}
     * @memberof LogoutRequest
     */
    'refresh_token'?: string;
    /**
     * Whether the refresh token is submitted in the JSON response, or in a httpOnly cookie.
     * @type {string}
     * @memberof LogoutRequest
     */
    'mode'?: LogoutRequestModeEnum;
}

export const LogoutRequestModeEnum = {
    Json: 'json',
    Cookie: 'cookie',
    Session: 'session'
} as const;

export type LogoutRequestModeEnum = typeof LogoutRequestModeEnum[keyof typeof LogoutRequestModeEnum];


