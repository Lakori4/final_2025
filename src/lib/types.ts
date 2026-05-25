export type Character = {

    id: number,
    name: string,
    status: string,
    episode: string[],
    image: string,
    gender: string,
    species: string,
    origin: { name: string, url: string }
    location: { name: string, url: string }
}

export type Paging = {
    pages: number
    next?: string
    prev?: string
}

export type ApiResp = {
    info: Paging
    results: Character[]
    error?: string
}
