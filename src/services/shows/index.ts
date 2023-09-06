import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

// --- Keys ---
import { createUseShowKey } from './keys';

// --- API ---
import { fetcher } from '@services/global/api';

// --- Interfaces ---
import { IAnime } from '@interfaces/IAnime';

const MINUTES_TO_REFETCH_DATA = 5 * 60 * 1000; // 5 minutes

interface IShowQuery {
	data: IAnime[];
}

interface IShowIDQuery {
	data: IAnime;
}

export const useShow = (options?: UseQueryOptions<IShowQuery, AxiosError>) =>
	useQuery(
		createUseShowKey('airing'),
		() => fetcher<IShowQuery>(`seasons/now?page=1&limit=15`).then(({ data }) => data),
		{ ...options, retry: false }
	);

export const useTopShow = (options?: UseQueryOptions<IShowQuery, AxiosError>) =>
	useQuery(
		createUseShowKey('topAiring'),
		() =>
			fetcher<IShowQuery>(`top/anime?type=tv&filter=airing&sfw=true&page=1&limit=5`).then(
				({ data }) => data
			),
		{ ...options, retry: false }
	);

export const useShowID = (
	id: number,
	options?: UseQueryOptions<IShowIDQuery, AxiosError>
) =>
	useQuery(
		createUseShowKey('findAnimeByID'),
		() => fetcher<IShowIDQuery>(`anime/${id}`).then(({ data }) => data),
		{ ...options, retry: false }
	);

export const useFindShow = (
	keyword: string,
	options?: UseQueryOptions<IShowQuery, AxiosError>
) =>
	useQuery(
		[createUseShowKey('searchAnime'), keyword],
		() =>
			fetcher<IShowQuery>(`anime?q=${keyword}&order_by=popularity&sort=asc`).then(
				({ data }) => data
			),
		{ ...options, retry: false }
	);
