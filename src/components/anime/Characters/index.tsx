import dynamic from 'next/dynamic';

// --- Chakra-UI ---
import {
	Heading,
	Container,
	SimpleGrid,
	Box,
	Avatar,
	Text,
	Stack,
} from '@chakra-ui/react';

// --- Components ---
const CardSkeleton = dynamic(() => import('@components/common/Skeleton/CardSkeleton'));

// --- Interfaces ---
import { ICharacter } from '@interfaces/ICharacter';

interface ICharacterComponent {
	characters: ICharacter[];
	isLoading: boolean;
}

export default function TrailerComponent({
	characters,
	isLoading,
}: ICharacterComponent): JSX.Element {
	return (
		<Container maxW={'6xl'} py={10}>
			<Heading as="h2" marginBottom={5}>
				Characters
			</Heading>

			{isLoading && <CardSkeleton />}

			<SimpleGrid columns={[2, 5]} gap={6}>
				{characters &&
					characters.map(item => (
						<Box key={item.character.mal_id}>
							<Stack gap={1} align={'center'}>
								<Avatar
									name={item.character.name}
									src={item.character.images.jpg.image_url}
									width={'100px'}
									height={'100px'}
								/>
								<Box textAlign={'center'}>
									<Heading size="sm" noOfLines={1}>
										{item.character.name}
									</Heading>
									<Text fontSize={13}>{item.role} role</Text>
								</Box>
							</Stack>
						</Box>
					))}
			</SimpleGrid>
		</Container>
	);
}
