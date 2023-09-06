import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

// --- Fonts ---
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/400.css';

// --- React Query ---
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// --- Chakra-UI ---
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@styles/theme';

// --- Analysis (optional) ---
// import '@scripts/wdyr';

// --- Configs ---
import SEO from '@root/next-seo.config';

// --- Components ---
import MainContentComponent from '@components/MainContent';

const queryClient = new QueryClient();

export default function _app({ Component, pageProps, router: { route } }: AppProps) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>
					<MainContentComponent>
						<Component {...pageProps} key={route} />
					</MainContentComponent>
				</ChakraProvider>
			</QueryClientProvider>
		</>
	);
}
