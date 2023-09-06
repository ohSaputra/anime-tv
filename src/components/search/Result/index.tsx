import dynamic from 'next/dynamic';
// --- Chakra-UI ---
import { Box, SimpleGrid, Link } from '@chakra-ui/react';

// --- Interfaces ---
import { IAnime } from '@interfaces/IAnime';

// --- Components ---
const AnimeCardComponent = dynamic(() => import('@root/src/components/common/AnimeCard'));
const MainContainer = dynamic(() => import('@components/common/Container'));
const CardSkeleton = dynamic(() => import('@components/common/Skeleton/CardSkeleton'));

interface IResultComponent {
	shows: IAnime[];
	isLoading: boolean;
}

export default function ResultComponent({
	shows,
	isLoading,
}: IResultComponent): JSX.Element {
	return (
		<Box>
			<MainContainer py={10}>
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
		</Box>
	);
}
