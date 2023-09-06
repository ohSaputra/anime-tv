import dynamic from 'next/dynamic';

// --- Chakra-UI ---
import { Heading, SimpleGrid, Link } from '@chakra-ui/react';

// --- Interfaces ---
import { IAnime } from '@interfaces/IAnime';

// --- Components ---
const AnimeCardComponent = dynamic(() => import('@root/src/components/common/AnimeCard'));
const MainContainer = dynamic(() => import('@components/common/Container'));
const CardSkeleton = dynamic(() => import('@components/common/Skeleton/CardSkeleton'));

interface ITrendingComponent {
	shows: IAnime[];
	isLoading: boolean;
}

export default function TrendingComponent({
	shows,
	isLoading,
}: ITrendingComponent): JSX.Element {
	return (
		<MainContainer py={10}>
			<Heading as="h4" mb={5} fontSize={'25px'}>
				Trending
			</Heading>

			{isLoading && <CardSkeleton />}

			<SimpleGrid columns={[2, 5]} spacing="25px">
				{shows &&
					shows.map(show => (
						<Link
							key={show.mal_id}
							href={`/anime/${show.mal_id}`}
							_hover={{ textDecoration: 'none' }}
						>
							<AnimeCardComponent data={show} />
						</Link>
					))}
			</SimpleGrid>
		</MainContainer>
	);
}
