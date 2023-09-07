import dynamic from 'next/dynamic';

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

	const bgColor = useColorModeValue('gray.50', 'gray.900');

	return (
		<Box
			bgColor={bgColor}
			bgImage={`url("${HERO_PATTERN(colorMode)}")`}
			overflow="hidden"
		>
			<NavComponent />

			{children}

			<FooterComponent />
		</Box>
	);
}
