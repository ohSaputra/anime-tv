import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NavComponent from '@components/common/Nav';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('Navbar Component', () => {
	test('Navbar should have heading with text AnimeTV', async () => {
		render(<NavComponent />);
		const heading = await screen.findByRole('heading', { name: 'AnimeTV' });

		expect(heading).toBeInTheDocument();
	});

	test('Navbar should have textbox for user to search their anime', async () => {
		render(<NavComponent />);
		const input = await screen.findByPlaceholderText(/Search anime .../);

		expect(input).toBeInTheDocument();
	});

	test('Navbar should have theme switcher button', async () => {
		render(<NavComponent />);
		const button = await screen.findByRole('button');

		expect(button).toBeInTheDocument();
	});

	test('User should be able to type on textbox', async () => {
		const user = userEvent.setup();

		render(<NavComponent />);

		const input = await screen.findByPlaceholderText(/Search anime .../);

		await user.type(input, 'test{Enter}');

		expect(input).toHaveValue('test');
	});
});
