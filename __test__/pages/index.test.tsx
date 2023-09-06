import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

import HomePage from '@pages/index';

describe('HomePage', () => {
	const queryClient = new QueryClient();

	test('BannerComponent must be loaded', async () => {
		mockRouter.push('/');

		render(
			<QueryClientProvider client={queryClient}>
				<HomePage />
			</QueryClientProvider>
		);

		const banner = await screen.findByText(/AnimeTV watch/);

		expect(banner).toBeInTheDocument();
	});

	test('TrendingComponent must be loaded', async () => {
		mockRouter.push('/');

		render(
			<QueryClientProvider client={queryClient}>
				<HomePage />
			</QueryClientProvider>
		);

		const trending = await screen.findByText(/Trending/);

		expect(trending).toBeInTheDocument();
	});

	test('AiringComponent must be loaded', async () => {
		mockRouter.push('/');

		render(
			<QueryClientProvider client={queryClient}>
				<HomePage />
			</QueryClientProvider>
		);

		const airing = await screen.findByText(/Now Airing/);

		expect(airing).toBeInTheDocument();
	});
});
