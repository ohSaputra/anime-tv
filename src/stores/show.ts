import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

// --- Models ---
import { IAnime } from '@interfaces/IAnime';

interface State {
	shows: IAnime[];

	addOneShow: (anime: IAnime) => void;
	addShows: (animes: IAnime[]) => void;
	getShow: (id: number) => IAnime;
	getShowIndex: (id: number) => number;
	removeShow: (id: number) => void;
	selectShow: (id: number) => IAnime;
}

const cleanShow = {
	aired: {
		from: null,
		string: null,
		to: null,
	},
	mal_id: null,
	url: null,
	images: null,
	title: null,
	titles: null,
	episodes: null,
	genres: null,
	rating: null,
	rank: null,
	score: null,
	scored_by: null,
	popularity: null,
	source: null,
	season: null,
	duration: null,
	studios: null,
	status: null,
	synopsis: null,
	trailer: null,
	year: null,
};

const showCreator: StateCreator<State, [['zustand/persist', unknown]]> = (set, get) => ({
	shows: [],

	addOneShow: (anime: IAnime) => {
		const animeExists = !!get().getShow(anime.mal_id);
		if (animeExists) get().removeShow(anime.mal_id);

		set(state => ({ shows: [anime, ...state.shows] }));
	},
	addShows: (animes: IAnime[]) => {
		animes.map(anime => {
			const animeExists = !!get().getShow(anime.mal_id);
			if (animeExists) get().removeShow(anime.mal_id);
		});

		set(state => ({ shows: [...animes, ...state.shows] }));
	},
	getShow: (id: number) => {
		const shows = get().shows;

		return shows.find(show => show.mal_id === id);
	},
	getShowIndex: (id: number) => {
		const shows = get().shows;

		return shows.findIndex(show => show.mal_id === id);
	},
	removeShow: (id: number) => {
		const showIndex = get().getShowIndex(id);

		const shows = get().shows;
		shows.splice(showIndex, 1);

		set(() => ({ shows: [...shows] }));
	},
	selectShow: (id: number) => {
		const animeExists = get().getShow(id);

		return animeExists ? animeExists : cleanShow;
	},
});

const useShowStore = create<State>()(
	persist(showCreator, {
		name: 'shows-storage',
	})
);

export default useShowStore;
