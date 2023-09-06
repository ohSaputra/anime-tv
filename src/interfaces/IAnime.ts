export interface IAnimeImagesType {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
}

export interface IAnimeTitle {
	type: string;
	title: string;
}

export interface IAnimeStudio {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

export interface IAnimeGenre {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

export interface IAnimeTrailer {
	embed_url: string;
	url: string;
	youtube_id: string;
}

export interface IAnimeAired {
	from: string;
	string: string;
	to: string;
}

export interface IAnime {
	aired: IAnimeAired;
	mal_id: number;
	url: string;
	images: {
		jpg: IAnimeImagesType;
		webp: IAnimeImagesType;
	};
	title: string;
	titles: IAnimeTitle[];
	episodes: number;
	genres: IAnimeGenre[];
	rating: string;
	rank: number;
	score: number;
	scored_by: number;
	popularity: number;
	source: string;
	season: string;
	duration: string;
	studios: IAnimeStudio[];
	status: string;
	synopsis: string;
	trailer: IAnimeTrailer;
	year: number;
}
