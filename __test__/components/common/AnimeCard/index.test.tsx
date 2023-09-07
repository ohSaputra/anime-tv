import { render, screen } from '@testing-library/react';

import AnimeCardComponent from '@components/common/AnimeCard';

describe('AnimeCard Component', () => {
	const props = {
		images: {
			jpg: {
				image_url: 'https://cdn.myanimelist.net/images/anime/1164/138058.jpg',
				large_image_url: null,
				small_image_url: null,
			},
			webp: null,
		},
		mal_id: 123,
		title: 'Jujutsu Kaisen 2nd Season',
		aired: null,
		titles: null,
		episodes: 12,
		genres: null,
		rating: null,
		rank: null,
		score: null,
		scored_by: null,
		popularity: null,
		source: null,
		season: null,
		duration: null,
		studios: null,
		status: null,
		synopsis: null,
		trailer: null,
		year: null,
		url: null,
	};

	test('AnimeCard should have image', async () => {
		render(<AnimeCardComponent data={props} />);
		const image = await screen.findByRole('img');

		expect(image).toBeInTheDocument();
	});

	test('AnimeCard should have text', async () => {
		render(<AnimeCardComponent data={props} />);
		const heading = await screen.findByRole('heading');
		const paragraph = await screen.findByText(/Episodes/);

		expect(heading).toHaveTextContent('Jujutsu Kaisen 2nd Season');
		expect(paragraph).toHaveTextContent('12 Episodes');
	});
});
