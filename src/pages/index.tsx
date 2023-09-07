import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

// --- Services ---
import { useShow, useTopShow } from '@services/shows';

// --- Stores ---
import useShowStore from '@stores/show';

// --- Components ---
const BannerComponent = dynamic(() => import('@components/home/Banner'));
const TrendingComponent = dynamic(() => import('@components/home/Trending'));
const AiringComponent = dynamic(() => import('@components/home/Airing'));

export default function HomePage() {
	const { addShows, shows } = useShowStore(state => state);

	// --- Using React Query ---
	//
	const { data: show, isLoading } = useShow();
	const { data: topShow, isLoading: isLoadingTopShow } = useTopShow();

	useEffect(() => {
		if (show) addShows(show?.data);
		if (topShow) addShows(topShow?.data);
	}, [show, topShow, addShows]);

	return (
		<>
			<NextSeo title="Search" description="List of anime this season" />

			<BannerComponent />
			<TrendingComponent
				isLoading={isLoadingTopShow}
				shows={!isLoadingTopShow ? topShow?.data : []}
			/>
			<AiringComponent isLoading={isLoading} shows={!isLoading ? show?.data : []} />
		</>
	);
}
