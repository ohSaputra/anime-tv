// --- Chakra-UI ---
import {
	Container,
	Heading,
	Image,
	useColorModeValue,
	Box,
	SimpleGrid,
} from '@chakra-ui/react';

export default function AnimeNotFoundComponent(): JSX.Element {
	const bg = useColorModeValue('gray.200', 'gray.700');

	return (
		<>
			<Box backgroundColor={bg}>
				<Container maxW={'container.xl'}>
					<SimpleGrid py={['5rem', '2rem']} columns={[1, 2]} alignItems={'center'}>
						<Image src="/static/images/not-found.png" alt="Anime not found" />
						<Heading as="h2" fontSize={['lg', 'xl']} textAlign={'center'}>
							Oops the show that you are looking are not available.
						</Heading>
					</SimpleGrid>
				</Container>
			</Box>
		</>
	);
}
