export type SiteLink = {
	href: string;
	label: string;
};

export type SiteConfig = {
	name: string;
	title: string;
	description: string;
	siteUrl: string;
	email: string;
	locale: string;
	authorName: string;
	authorRole: string;
	keywords: string[];
	ogImage: string;
	navLinks: SiteLink[];
	extraPages: SiteLink[];
	legalLinks: SiteLink[];
	socialLinks: SiteLink[];
};

export const siteConfig: SiteConfig = {
	name: 'Andrew Smith',
	title: 'Andrew Smith | Product Designer & Front-End Developer',
	description: 'Andrew Smith is a product designer and front-end developer in Adelaide with 20 years of experience, from hand-coded websites to design systems and complex digital products.',
	siteUrl: 'https://asmithdigital.github.io/work',
	email: 'asmithdigital@gmail.com',
	locale: 'en-AU',
	authorName: 'Andrew Smith',
	authorRole: 'Product Designer & Front-End Developer',
	keywords: ['product designer Adelaide','front-end developer','design systems','UX design','Andrew Smith'],
	ogImage: '/og-image.svg',
	navLinks: [
		{ href: '/work/design', label: 'Design' },
		{ href: '/work/development', label: 'Development' },
		{ href: '/work/freelance', label: 'Freelance' },
		{ href: '/work/resume', label: 'Resume' },
	],
	extraPages: [],
	legalLinks: [],
	socialLinks: [
		{ href: 'https://www.linkedin.com/in/andrewstephensmith/', label: 'LinkedIn' },
	],
};
