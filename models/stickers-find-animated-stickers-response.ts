/*
Giphy API

Giphy API

The version of the OpenAPI document: 1.0
Contact: support@giphy.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Gif } from './gif';
import { Meta } from './meta';
import { Pagination } from './pagination';

/**
 * 
 * @export
 * @interface StickersFindAnimatedStickersResponse
 */
export interface StickersFindAnimatedStickersResponse {
    /**
     * 
     * @type {Array<Gif>}
     * @memberof StickersFindAnimatedStickersResponse
     */
    'data'?: Array<Gif>;
    /**
     * 
     * @type {Meta}
     * @memberof StickersFindAnimatedStickersResponse
     */
    'meta'?: Meta;
    /**
     * 
     * @type {Pagination}
     * @memberof StickersFindAnimatedStickersResponse
     */
    'pagination'?: Pagination;
}

