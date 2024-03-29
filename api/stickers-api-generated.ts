/* tslint:disable */
/* eslint-disable */
/*
Giphy API

Giphy API

The version of the OpenAPI document: 1.0
Contact: support@giphy.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { StickersFindAnimatedStickersResponse } from '../models';
// @ts-ignore
import { StickersGetRandomResponse } from '../models';
// @ts-ignore
import { StickersGetTrendingResponse } from '../models';
// @ts-ignore
import { StickersTranslatePhraseToStickerResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * StickersApi - axios parameter creator
 * @export
 */
export const StickersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs. 
         * @summary Search Stickers
         * @param {string} q Search query term or prhase.
         * @param {number} [limit] The maximum number of records to return.
         * @param {number} [offset] An optional results offset.
         * @param {string} [rating] Filters results by specified rating.
         * @param {string} [lang] Specify default language for regional content; use a 2-letter ISO 639-1 language code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAnimatedStickers: async (q: string, limit?: number, offset?: number, rating?: string, lang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'q' is not null or undefined
            assertParamExists('findAnimatedStickers', 'q', q)
            const localVarPath = `/stickers/search`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({object: localVarQueryParameter, key: "api_key", keyParamName: "apiKey", configuration})
            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (rating !== undefined) {
                localVarQueryParameter['rating'] = rating;
            }

            if (lang !== undefined) {
                localVarQueryParameter['lang'] = lang;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/stickers/search',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog. 
         * @summary Random Sticker
         * @param {string} [tag] Filters results by specified tag.
         * @param {string} [rating] Filters results by specified rating.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRandom: async (tag?: string, rating?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/stickers/random`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({object: localVarQueryParameter, key: "api_key", keyParamName: "apiKey", configuration})
            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (rating !== undefined) {
                localVarQueryParameter['rating'] = rating;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/stickers/random',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default. 
         * @summary Trending Stickers
         * @param {number} [limit] The maximum number of records to return.
         * @param {number} [offset] An optional results offset.
         * @param {string} [rating] Filters results by specified rating.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTrending: async (limit?: number, offset?: number, rating?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/stickers/trending`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({object: localVarQueryParameter, key: "api_key", keyParamName: "apiKey", configuration})
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (rating !== undefined) {
                localVarQueryParameter['rating'] = rating;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/stickers/trending',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs. 
         * @summary Translate phrase to Sticker
         * @param {string} s Search term.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        translatePhraseToSticker: async (s: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 's' is not null or undefined
            assertParamExists('translatePhraseToSticker', 's', s)
            const localVarPath = `/stickers/translate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({object: localVarQueryParameter, key: "api_key", keyParamName: "apiKey", configuration})
            if (s !== undefined) {
                localVarQueryParameter['s'] = s;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/stickers/translate',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StickersApi - functional programming interface
 * @export
 */
export const StickersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StickersApiAxiosParamCreator(configuration)
    return {
        /**
         * Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs. 
         * @summary Search Stickers
         * @param {StickersApiFindAnimatedStickersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAnimatedStickers(requestParameters: StickersApiFindAnimatedStickersRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StickersFindAnimatedStickersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findAnimatedStickers(requestParameters.q, requestParameters.limit, requestParameters.offset, requestParameters.rating, requestParameters.lang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog. 
         * @summary Random Sticker
         * @param {StickersApiGetRandomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRandom(requestParameters: StickersApiGetRandomRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StickersGetRandomResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRandom(requestParameters.tag, requestParameters.rating, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default. 
         * @summary Trending Stickers
         * @param {StickersApiGetTrendingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTrending(requestParameters: StickersApiGetTrendingRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StickersGetTrendingResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTrending(requestParameters.limit, requestParameters.offset, requestParameters.rating, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs. 
         * @summary Translate phrase to Sticker
         * @param {StickersApiTranslatePhraseToStickerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async translatePhraseToSticker(requestParameters: StickersApiTranslatePhraseToStickerRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StickersTranslatePhraseToStickerResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.translatePhraseToSticker(requestParameters.s, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * StickersApi - factory interface
 * @export
 */
export const StickersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StickersApiFp(configuration)
    return {
        /**
         * Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs. 
         * @summary Search Stickers
         * @param {StickersApiFindAnimatedStickersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAnimatedStickers(requestParameters: StickersApiFindAnimatedStickersRequest, options?: AxiosRequestConfig): AxiosPromise<StickersFindAnimatedStickersResponse> {
            return localVarFp.findAnimatedStickers(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog. 
         * @summary Random Sticker
         * @param {StickersApiGetRandomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRandom(requestParameters: StickersApiGetRandomRequest = {}, options?: AxiosRequestConfig): AxiosPromise<StickersGetRandomResponse> {
            return localVarFp.getRandom(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default. 
         * @summary Trending Stickers
         * @param {StickersApiGetTrendingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTrending(requestParameters: StickersApiGetTrendingRequest = {}, options?: AxiosRequestConfig): AxiosPromise<StickersGetTrendingResponse> {
            return localVarFp.getTrending(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs. 
         * @summary Translate phrase to Sticker
         * @param {StickersApiTranslatePhraseToStickerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        translatePhraseToSticker(requestParameters: StickersApiTranslatePhraseToStickerRequest, options?: AxiosRequestConfig): AxiosPromise<StickersTranslatePhraseToStickerResponse> {
            return localVarFp.translatePhraseToSticker(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for findAnimatedStickers operation in StickersApi.
 * @export
 * @interface StickersApiFindAnimatedStickersRequest
 */
export type StickersApiFindAnimatedStickersRequest = {
    
    /**
    * Search query term or prhase.
    * @type {string}
    * @memberof StickersApiFindAnimatedStickers
    */
    readonly q: string
    
    /**
    * The maximum number of records to return.
    * @type {number}
    * @memberof StickersApiFindAnimatedStickers
    */
    readonly limit?: number
    
    /**
    * An optional results offset.
    * @type {number}
    * @memberof StickersApiFindAnimatedStickers
    */
    readonly offset?: number
    
    /**
    * Filters results by specified rating.
    * @type {string}
    * @memberof StickersApiFindAnimatedStickers
    */
    readonly rating?: string
    
    /**
    * Specify default language for regional content; use a 2-letter ISO 639-1 language code.
    * @type {string}
    * @memberof StickersApiFindAnimatedStickers
    */
    readonly lang?: string
    
}

/**
 * Request parameters for getRandom operation in StickersApi.
 * @export
 * @interface StickersApiGetRandomRequest
 */
export type StickersApiGetRandomRequest = {
    
    /**
    * Filters results by specified tag.
    * @type {string}
    * @memberof StickersApiGetRandom
    */
    readonly tag?: string
    
    /**
    * Filters results by specified rating.
    * @type {string}
    * @memberof StickersApiGetRandom
    */
    readonly rating?: string
    
}

/**
 * Request parameters for getTrending operation in StickersApi.
 * @export
 * @interface StickersApiGetTrendingRequest
 */
export type StickersApiGetTrendingRequest = {
    
    /**
    * The maximum number of records to return.
    * @type {number}
    * @memberof StickersApiGetTrending
    */
    readonly limit?: number
    
    /**
    * An optional results offset.
    * @type {number}
    * @memberof StickersApiGetTrending
    */
    readonly offset?: number
    
    /**
    * Filters results by specified rating.
    * @type {string}
    * @memberof StickersApiGetTrending
    */
    readonly rating?: string
    
}

/**
 * Request parameters for translatePhraseToSticker operation in StickersApi.
 * @export
 * @interface StickersApiTranslatePhraseToStickerRequest
 */
export type StickersApiTranslatePhraseToStickerRequest = {
    
    /**
    * Search term.
    * @type {string}
    * @memberof StickersApiTranslatePhraseToSticker
    */
    readonly s: string
    
}

/**
 * StickersApiGenerated - object-oriented interface
 * @export
 * @class StickersApiGenerated
 * @extends {BaseAPI}
 */
export class StickersApiGenerated extends BaseAPI {
    /**
     * Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs. 
     * @summary Search Stickers
     * @param {StickersApiFindAnimatedStickersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StickersApiGenerated
     */
    public findAnimatedStickers(requestParameters: StickersApiFindAnimatedStickersRequest, options?: AxiosRequestConfig) {
        return StickersApiFp(this.configuration).findAnimatedStickers(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog. 
     * @summary Random Sticker
     * @param {StickersApiGetRandomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StickersApiGenerated
     */
    public getRandom(requestParameters: StickersApiGetRandomRequest = {}, options?: AxiosRequestConfig) {
        return StickersApiFp(this.configuration).getRandom(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default. 
     * @summary Trending Stickers
     * @param {StickersApiGetTrendingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StickersApiGenerated
     */
    public getTrending(requestParameters: StickersApiGetTrendingRequest = {}, options?: AxiosRequestConfig) {
        return StickersApiFp(this.configuration).getTrending(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs. 
     * @summary Translate phrase to Sticker
     * @param {StickersApiTranslatePhraseToStickerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StickersApiGenerated
     */
    public translatePhraseToSticker(requestParameters: StickersApiTranslatePhraseToStickerRequest, options?: AxiosRequestConfig) {
        return StickersApiFp(this.configuration).translatePhraseToSticker(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
