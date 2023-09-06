import { IAnimeImagesType } from './IAnime';

export interface ICharacter {
	character: {
		mal_id: number;
		images: {
			jpg: IAnimeImagesType;
			webp: IAnimeImagesType;
		};
		name: string;
	};
	role: string;
}
