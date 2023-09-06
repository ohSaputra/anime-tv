// --- Chakra-UI ---
import { Skeleton, SkeletonText, Grid, GridItem } from '@chakra-ui/react';

export default function DetailSkeletonComponent(): JSX.Element {
	return (
		<>
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
					<SkeletonText noOfLines={12} spacing="4" skeletonHeight="2" />
				</GridItem>
				<GridItem area="poster">
					<Skeleton height={{ base: '200px', md: '310px' }} borderRadius="15px" />
				</GridItem>
			</Grid>
		</>
	);
}
