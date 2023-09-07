import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import HomePage from '@pages/index';

describe('HomePage', () => {
	test('BannerComponent must be loaded', async () => {
		const queryClient = new QueryClient();
		render(
			<QueryClientProvider client={queryClient}>
				<HomePage />
			</QueryClientProvider>
		);

		const banner = await screen.findByText(/AnimeTV watch/);

		expect(banner).toBeInTheDocument();
	});

	test('TrendingComponent must be loaded', async () => {
		const queryClient = new QueryClient();
		render(
			<QueryClientProvider client={queryClient}>
				<HomePage />
			</QueryClientProvider>
		);

		const trending = await screen.findByText(/Trending/);

		expect(trending).toBeInTheDocument();
	});

	test('AiringComponent must be loaded', async () => {
		const queryClient = new QueryClient();
		render(
			<QueryClientProvider client={queryClient}>
				<HomePage />
			</QueryClientProvider>
		);

		const airing = await screen.findByText(/Now Airing/);

		expect(airing).toBeInTheDocument();
	});
});
