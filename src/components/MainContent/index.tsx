import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

// --- Chakra-UI ---
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';

// --- Styles ---
import { HERO_PATTERN } from '@styles/bgImages';

// --- Components ---
const NavComponent = dynamic(() => import('@components/common/Nav'));
const FooterComponent = dynamic(() => import('@components/common/Footer'));

// --- Component Props Interface ---
interface IMainContentProps {
	children: React.ReactNode;
}

export default function MainContentComponent({
	children,
}: IMainContentProps): JSX.Element {
	const { colorMode } = useColorMode();
	const router = useRouter();

	const bgColor = useColorModeValue('gray.50', 'gray.900');

	const handleSearchAnime = (keyword?: string) => {
		keyword &&
			router.push({
				pathname: '/search/[keyword]',
				query: { keyword },
			});
	};

	return (
		<Box
			bgColor={bgColor}
			bgImage={`url("${HERO_PATTERN(colorMode)}")`}
			overflow="hidden"
		>
			<NavComponent handleSearchAnime={handleSearchAnime} />

			{children}

			<FooterComponent />
		</Box>
	);
}
