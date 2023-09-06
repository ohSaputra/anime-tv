import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

// --- Keys ---
import { createUseShowKey } from './keys';

// --- API ---
import { fetcher } from '@services/global/api';

// --- Interfaces ---
import { ICharacter } from '@interfaces/ICharacter';

interface ICharacterQuery {
	data: ICharacter[];
}

export const useCharacter = (
	animeId: number,
	options?: UseQueryOptions<ICharacterQuery, AxiosError>
) =>
	useQuery(
		createUseShowKey('airing'),
		() =>
			fetcher<ICharacterQuery>(`anime/${animeId}/characters`).then(({ data }) => data),
		{ ...options, retry: false }
	);
