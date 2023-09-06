import dynamic from 'next/dynamic';

// --- Chakra-UI ---
import { Heading, Highlight } from '@chakra-ui/react';

// --- Container Components ---
const MainContainer = dynamic(() => import('@components/common/Container'));

export default function BannerComponent(): JSX.Element {
	return (
		<MainContainer py={10}>
			<Heading as="h1" size={'3xl'} lineHeight={'taller'}>
				<Highlight
					query={['online', 'free']}
					styles={{ px: '2', py: '1', rounded: 'full', bg: 'gray.300' }}
				>
					AnimeTV watch online anime for free
				</Highlight>
			</Heading>
		</MainContainer>
	);
}
