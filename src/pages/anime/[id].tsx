import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// --- Services ---
import { useShowID } from '@services/shows';
import { useCharacter } from '@services/character';

// --- Stores ---
import useShowStore from '@stores/show';

// --- Components ---
const CharactersComponent = dynamic(() => import('@components/anime/Characters'));
const DetailComponent = dynamic(() => import('@components/anime/Detail'));
const TrailerComponent = dynamic(() => import('@components/anime/Trailer'));
const AnimeNotFoundComponent = dynamic(
	() => import('@components/common/Error/AnimeNotFound')
);

export default function AnimePage() {
	const { selectShow, addOneShow } = useShowStore(state => state);

	const router = useRouter();
	const id = router.query?.id;

	// --- Check data in store ---
	//
	const show = selectShow(+id);

	// --- Using React Query ---
	//
	const {
		data: newShow,
		isLoading,
		isError,
	} = useShowID(+id, {
		enabled: show.mal_id === null && id !== undefined,
	});
	const { data: characters, isLoading: isLoadCharacter } = useCharacter(+id, {
		enabled: id ? true : false,
	});

	useEffect(() => {
		if (newShow) addOneShow(newShow.data);
	}, [newShow, addOneShow]);

	return (
		<>
			<NextSeo title={show.title} description={show.synopsis} />

			{isError && <AnimeNotFoundComponent />}

			{!isError && (
				<>
					<DetailComponent show={show} isLoading={isLoading} />
					<TrailerComponent trailer={show.trailer} isLoading={isLoading} />
					<CharactersComponent
						characters={characters?.data}
						isLoading={isLoadCharacter}
					/>
				</>
			)}
		</>
	);
}
