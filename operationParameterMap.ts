type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/gifs/{gifId}-GET': {
        parameters: [
            {
                name: 'gifId'
            },
        ]
    },
    '/gifs-GET': {
        parameters: [
            {
                name: 'ids'
            },
        ]
    },
    '/gifs/random-GET': {
        parameters: [
            {
                name: 'tag'
            },
            {
                name: 'rating'
            },
        ]
    },
    '/gifs/trending-GET': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'offset'
            },
            {
                name: 'rating'
            },
        ]
    },
    '/gifs/search-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'limit'
            },
            {
                name: 'offset'
            },
            {
                name: 'rating'
            },
            {
                name: 'lang'
            },
        ]
    },
    '/gifs/translate-GET': {
        parameters: [
            {
                name: 's'
            },
        ]
    },
    '/stickers/search-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'limit'
            },
            {
                name: 'offset'
            },
            {
                name: 'rating'
            },
            {
                name: 'lang'
            },
        ]
    },
    '/stickers/random-GET': {
        parameters: [
            {
                name: 'tag'
            },
            {
                name: 'rating'
            },
        ]
    },
    '/stickers/trending-GET': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'offset'
            },
            {
                name: 'rating'
            },
        ]
    },
    '/stickers/translate-GET': {
        parameters: [
            {
                name: 's'
            },
        ]
    },
}