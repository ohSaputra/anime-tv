/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
	type: 'website',
	titleTemplate: '%s | Anime-TV',
	defaultTitle: 'Anime-TV',
	description: 'List of anime this season',
	site_name: 'Anime-TV',
	openGraph: {
		url: 'https://anime-tv.vercel.app',
		title: 'Anime-TV',
		description: 'List of anime this season',
		images: [
			{
				url: 'https://anime-tv.vercel.app/static/images/banner.jpg',
				width: 512,
				height: 256,
				alt: 'Anime-TV Banner Image',
			},
		],
		site_name: 'Anime-TV',
	},
};

export default defaultSEOConfig;
