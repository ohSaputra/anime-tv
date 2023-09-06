import dynamic from 'next/dynamic';

// --- Chakra-UI ---
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

// --- Container Components ---
const MainContainer = dynamic(() => import('@components/common/Container'));

export default function FooterComponent(): JSX.Element {
	return (
		<Box
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<MainContainer py={4}>
				<Text>© 2023 AnimeTV. All rights reserved</Text>
			</MainContainer>
		</Box>
	);
}
