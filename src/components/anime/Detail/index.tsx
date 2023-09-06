import dynamic from 'next/dynamic';

// --- Chakra-UI ---
import {
	Stack,
	Text,
	Center,
	Image,
	Heading,
	Container,
	Grid,
	GridItem,
	useColorModeValue,
	Box,
} from '@chakra-ui/react';

// --- Interfaces ---
import { IAnime } from '@interfaces/IAnime';

// --- Components ---
const DetailSkeleton = dynamic(
	() => import('@components/common/Skeleton/DetailSkeleton')
);

interface IDetailProps {
	show: IAnime;
	isLoading: boolean;
}

export default function DetailComponent({ show, isLoading }: IDetailProps): JSX.Element {
	const bg = useColorModeValue('gray.200', 'gray.700');

	return (
		<Box backgroundColor={bg}>
			<Container maxW={'6xl'} py={10}>
				{isLoading && !show.mal_id && <DetailSkeleton />}

				<Grid
					templateAreas={{
						base: `"poster"
								 "content"`,
						md: `"content poster"`,
					}}
					gridTemplateColumns={{ base: '1fr', md: '1fr 350px' }}
					gap={6}
				>
					<GridItem area="content">
						<Stack spacing="2">
							{show.title && (
								<Heading size="lg" lineHeight="none" textAlign="left" marginBottom={5}>
									{show.title}
								</Heading>
							)}
							{show.aired.string && (
								<Text>
									Aired: <Text as="b">{show.aired.string}</Text>
								</Text>
							)}
							{show.rating && (
								<Text>
									Rating: <Text as="b">{show.rating}</Text>
								</Text>
							)}
							{show.rank && (
								<Text>
									Rank: <Text as="b">{show.rank}</Text>
								</Text>
							)}
							{show.score && (
								<Text>
									Score: <Text as="b">{show.score}</Text>
								</Text>
							)}
							{show.scored_by && (
								<Text>
									Scored By: <Text as="b">{show.scored_by}</Text>
								</Text>
							)}
							{show.popularity && (
								<Text>
									Popularity: <Text as="b">{show.popularity}</Text>
								</Text>
							)}
							{show.status && (
								<Text>
									Status: <Text as="b">{show.status}</Text>
								</Text>
							)}
							{show.season && (
								<Text>
									Season: <Text as="b">{show.season}</Text>
								</Text>
							)}
							{show.duration && (
								<Text>
									Duration: <Text as="b">{show.duration}</Text>
								</Text>
							)}
							{show.synopsis && (
								<>
									<Heading as="h3" paddingTop={5} fontSize={'xl'}>
										Description
									</Heading>
									<Text>{show.synopsis}</Text>
								</>
							)}
						</Stack>
					</GridItem>
					<GridItem area="poster">
						<Center h="fit-content" marginTop={[-14, 0]}>
							{show.images && (
								<Image
									objectFit="cover"
									width="100%"
									src={show.images.jpg.large_image_url}
									alt={show.title}
									maxW={{ base: '100%', md: '350px' }}
									borderRadius={'15px'}
									marginTop={['30px', '0px']}
								/>
							)}
						</Center>
					</GridItem>
				</Grid>
			</Container>
		</Box>
	);
}
