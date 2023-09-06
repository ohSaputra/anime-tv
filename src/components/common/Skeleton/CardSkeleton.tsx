// --- Chakra-UI ---
import { Skeleton, SimpleGrid } from '@chakra-ui/react';

export default function CardSkeletonComponent(): JSX.Element {
	return (
		<>
			<SimpleGrid columns={[2, 5]} spacing="25px">
				<Skeleton height={{ base: '200px', md: '310px' }} borderRadius="15px" />
				<Skeleton height={{ base: '200px', md: '310px' }} borderRadius="15px" />
				<Skeleton height={{ base: '200px', md: '310px' }} borderRadius="15px" />
				<Skeleton height={{ base: '200px', md: '310px' }} borderRadius="15px" />
				<Skeleton height={{ base: '200px', md: '310px' }} borderRadius="15px" />
			</SimpleGrid>
		</>
	);
}
