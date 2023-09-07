// --- Chakra-UI ---
import { Image, Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

// --- Interfaces ---
import { IAnime } from '@interfaces/IAnime';

interface ITrendingCardComponent {
	data: IAnime;
}

export default function TrendingCardComponent({
	data,
}: ITrendingCardComponent): JSX.Element {
	const episodeColor = useColorModeValue('blackAlpha.700', 'whiteAlpha.600');
	return (
		<Box backgroundColor="none">
			<Image
				objectFit="cover"
				src={data.images.jpg.image_url}
				alt={data.title}
				maxH="md"
				height={{ base: '200px', md: '310px' }}
				width="100%"
				borderRadius="15px"
			/>
			<Box py={4}>
				<Heading size="sm" noOfLines={1} textAlign="left">
					{data.title}
				</Heading>
				{data.episodes && (
					<Text color={episodeColor} fontSize={13}>
						{data.episodes} Episodes
					</Text>
				)}
			</Box>
		</Box>
	);
}
