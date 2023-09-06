import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

// --- Chakra-UI ---
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

// --- Container Components ---
const MainContainer = dynamic(() => import('@components/common/Container'));
const ResultContainer = dynamic(() => import('@components/search/Result'));

// --- Services ---
import { useFindShow } from '@services/shows';

// --- Components ---

export default function SearchPage() {
	const router = useRouter();
	const keyword = router.query?.keyword as string;
	const bg = useColorModeValue('gray.200', 'gray.700');

	// --- Using React Query ---
	//
	const { data: shows, isLoading } = useFindShow(keyword);

	return (
		<>
			<NextSeo title={'Search'} description={'Search anime...'} />

			<Box backgroundColor={bg}>
				<MainContainer py={20}>
					<Heading>
						Search result for <q>{keyword}</q>
					</Heading>
					<Text>{shows?.data.length || '?'} animes found</Text>
				</MainContainer>
			</Box>
			<ResultContainer isLoading={isLoading} shows={shows?.data} />
		</>
	);
}
