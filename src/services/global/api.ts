import axios, { AxiosResponse } from 'axios';

export const api = axios.create({
	baseURL: 'https://api.jikan.moe/v4/',
});

export const fetcher = <Data>(url: string) => api.get<Data, AxiosResponse<Data>>(url);
