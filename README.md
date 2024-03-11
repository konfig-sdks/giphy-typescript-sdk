<div align="center">

[![Visit Giphy](./header.png)](https://giphy.com)

# [Giphy](https://giphy.com)<a id="giphy"></a>

Giphy API

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`giphy.gifs.getById`](#giphygifsgetbyid)
  * [`giphy.gifs.getByIds`](#giphygifsgetbyids)
  * [`giphy.gifs.getRandomGif`](#giphygifsgetrandomgif)
  * [`giphy.gifs.getTrendingGifs`](#giphygifsgettrendinggifs)
  * [`giphy.gifs.searchGifs`](#giphygifssearchgifs)
  * [`giphy.gifs.translatePhraseGif`](#giphygifstranslatephrasegif)
  * [`giphy.stickers.findAnimatedStickers`](#giphystickersfindanimatedstickers)
  * [`giphy.stickers.getRandom`](#giphystickersgetrandom)
  * [`giphy.stickers.getTrending`](#giphystickersgettrending)
  * [`giphy.stickers.translatePhraseToSticker`](#giphystickerstranslatephrasetosticker)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Giphy&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Giphy } from "giphy-typescript-sdk";

const giphy = new Giphy({
  // Defining the base path is optional and defaults to https://api.giphy.com/v1
  // basePath: "https://api.giphy.com/v1",
  apiKey: "API_KEY",
});

const getByIdResponse = await giphy.gifs.getById({
  gifId: 1,
});

console.log(getByIdResponse);
```

## Reference<a id="reference"></a>


### `giphy.gifs.getById`<a id="giphygifsgetbyid"></a>

Returns a GIF given that GIF's unique ID


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await giphy.gifs.getById({
  gifId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### gifId: `number`<a id="gifid-number"></a>

Filters results by specified GIF ID.

#### 🔄 Return<a id="🔄-return"></a>

[GifsGetByIdResponse](./models/gifs-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/gifs/{gifId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `giphy.gifs.getByIds`<a id="giphygifsgetbyids"></a>

A multiget version of the get GIF by ID endpoint.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdsResponse = await giphy.gifs.getByIds({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`<a id="ids-string"></a>

Filters results by specified GIF IDs, separated by commas.

#### 🔄 Return<a id="🔄-return"></a>

[GifsGetByIdsResponse](./models/gifs-get-by-ids-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/gifs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `giphy.gifs.getRandomGif`<a id="giphygifsgetrandomgif"></a>

Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRandomGifResponse = await giphy.gifs.getRandomGif({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

Filters results by specified tag.

##### rating: `string`<a id="rating-string"></a>

Filters results by specified rating.

#### 🔄 Return<a id="🔄-return"></a>

[GifsGetRandomGifResponse](./models/gifs-get-random-gif-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/gifs/random` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `giphy.gifs.getTrendingGifs`<a id="giphygifsgettrendinggifs"></a>

Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team.  The data returned mirrors the GIFs showcased on the GIPHY homepage. Returns 25 results by default.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTrendingGifsResponse = await giphy.gifs.getTrendingGifs({
  limit: 25,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of records to return.

##### offset: `number`<a id="offset-number"></a>

An optional results offset.

##### rating: `string`<a id="rating-string"></a>

Filters results by specified rating.

#### 🔄 Return<a id="🔄-return"></a>

[GifsGetTrendingGifsResponse](./models/gifs-get-trending-gifs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/gifs/trending` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `giphy.gifs.searchGifs`<a id="giphygifssearchgifs"></a>

Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored.  Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchGifsResponse = await giphy.gifs.searchGifs({
  q: "q_example",
  limit: 25,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

Search query term or prhase.

##### limit: `number`<a id="limit-number"></a>

The maximum number of records to return.

##### offset: `number`<a id="offset-number"></a>

An optional results offset.

##### rating: `string`<a id="rating-string"></a>

Filters results by specified rating.

##### lang: `string`<a id="lang-string"></a>

Specify default language for regional content; use a 2-letter ISO 639-1 language code.

#### 🔄 Return<a id="🔄-return"></a>

[GifsSearchGifsResponse](./models/gifs-search-gifs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/gifs/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `giphy.gifs.translatePhraseGif`<a id="giphygifstranslatephrasegif"></a>

The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIF


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const translatePhraseGifResponse = await giphy.gifs.translatePhraseGif({
  s: "s_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### s: `string`<a id="s-string"></a>

Search term.

#### 🔄 Return<a id="🔄-return"></a>

[GifsTranslatePhraseGifResponse](./models/gifs-translate-phrase-gif-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/gifs/translate` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `giphy.stickers.findAnimatedStickers`<a id="giphystickersfindanimatedstickers"></a>

Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findAnimatedStickersResponse = await giphy.stickers.findAnimatedStickers({
  q: "q_example",
  limit: 25,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

Search query term or prhase.

##### limit: `number`<a id="limit-number"></a>

The maximum number of records to return.

##### offset: `number`<a id="offset-number"></a>

An optional results offset.

##### rating: `string`<a id="rating-string"></a>

Filters results by specified rating.

##### lang: `string`<a id="lang-string"></a>

Specify default language for regional content; use a 2-letter ISO 639-1 language code.

#### 🔄 Return<a id="🔄-return"></a>

[StickersFindAnimatedStickersResponse](./models/stickers-find-animated-stickers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stickers/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `giphy.stickers.getRandom`<a id="giphystickersgetrandom"></a>

Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRandomResponse = await giphy.stickers.getRandom({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

Filters results by specified tag.

##### rating: `string`<a id="rating-string"></a>

Filters results by specified rating.

#### 🔄 Return<a id="🔄-return"></a>

[StickersGetRandomResponse](./models/stickers-get-random-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stickers/random` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `giphy.stickers.getTrending`<a id="giphystickersgettrending"></a>

Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTrendingResponse = await giphy.stickers.getTrending({
  limit: 25,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of records to return.

##### offset: `number`<a id="offset-number"></a>

An optional results offset.

##### rating: `string`<a id="rating-string"></a>

Filters results by specified rating.

#### 🔄 Return<a id="🔄-return"></a>

[StickersGetTrendingResponse](./models/stickers-get-trending-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stickers/trending` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `giphy.stickers.translatePhraseToSticker`<a id="giphystickerstranslatephrasetosticker"></a>

The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const translatePhraseToStickerResponse =
  await giphy.stickers.translatePhraseToSticker({
    s: "s_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### s: `string`<a id="s-string"></a>

Search term.

#### 🔄 Return<a id="🔄-return"></a>

[StickersTranslatePhraseToStickerResponse](./models/stickers-translate-phrase-to-sticker-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stickers/translate` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
