import axios from "axios";
import { ApiResp, Character, Paging } from "./types";


const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
    timeout: 5000
})

export const getInfo = async (page?: number, status?: string, gender?: string, name?: string) => {

    try {
        const resp = await api.get(`character/?page=${page}&status=${status}&name=${name}&gender=${gender}`)
        const info: ApiResp = resp.data

        return info

    } catch (error) {
        console.error("Error fetching ApiResponse")
        throw error
    }
}

export const getCharById = async (id: string) => {

    try {
        const resp = await api.get(`character/${id}`)
        const chars: Character = resp.data

        return chars

    } catch (error) {
        console.error("Error fetching characters")
        throw error
    }
}

const getPages = async (page?: number, status?: string, gender?: string, name?: string) => {

    try {
        const resp = await api.get(`character/?page=${page}&status=${status}&name=${name}&gender=${gender}&`)
        const pages: Paging = { pages: resp.data.info.pages, next: resp.data.info.next, prev: resp.data.info.prev }

        return pages
    } catch (error) {
        console.error("Error fetching pages")
        throw error
    }
} 
