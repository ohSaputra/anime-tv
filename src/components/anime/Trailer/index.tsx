import { Heading, Container, AspectRatio, Skeleton } from '@chakra-ui/react';

// --- Interfaces ---
import { IAnimeTrailer } from '@interfaces/IAnime';

interface ITrailerProps {
	trailer: IAnimeTrailer;
	isLoading: boolean;
}

export default function TrailerComponent({
	trailer,
	isLoading,
}: ITrailerProps): JSX.Element {
	return (
		<Container maxW={'6xl'} py={10}>
			<Heading as="h2" marginBottom={5}>
				Trailer
			</Heading>

			{isLoading && !trailer?.embed_url && (
				<Skeleton height={{ base: '200px', md: '500px' }} />
			)}

			{trailer && (
				<AspectRatio ratio={1} maxH="500px">
					<iframe
						title="trailer-detail"
						src={trailer.embed_url}
						allowFullScreen
						allow="autoplay"
					/>
				</AspectRatio>
			)}
		</Container>
	);
}
