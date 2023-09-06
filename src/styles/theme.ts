import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const theme = extendTheme({
	config,
	fonts: {
		heading: `'Open Sans', sans-serif`,
		body: `'Raleway', sans-serif`,
	},
	styles: {
		global: {
			'*::-webkit-scrollbar': {
				width: '4px',
			},
			'*::-webkit-scrollbar-track': {
				width: '6px',
			},
			'*::-webkit-scrollbar-thumb': {
				background: 'gray.500',
			},
		},
	},
});

export default theme;
