// --- Chakra-UI ---
import { BackgroundProps, Box, Link, Text } from '@chakra-ui/react';

// --- Icons ---
import { FiExternalLink } from 'react-icons/fi';

// --- Component Props Interface ---
interface IInfoLinkProps {
	bgColor?: BackgroundProps['bgColor'];
}

export default function InfoLinkComponent({ bgColor }: IInfoLinkProps): JSX.Element {
	return (
		<Box
			w="full"
			display="grid"
			placeItems="center"
			position="absolute"
			zIndex="overlay"
			bottom="4"
			px="4"
		>
			<Link
				href="#"
				isExternal
				display="flex"
				alignItems="center"
				gap="2"
				bgColor={bgColor}
				py="2"
				px="4"
				borderRadius="xl"
				fontSize="sm"
				lineHeight="normal"
			>
				List of anime this season.
				<Text
					as={FiExternalLink}
					fontSize={{ base: '2.5rem', sm: '1.5rem', md: 'inherit' }}
				/>
			</Link>
		</Box>
	);
}
