// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Rohan Vachheta',
			description: 'Full Stack Software Developer | Creating innovative solutions with modern technologies',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/rohanvachheta' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/rohanvachheta' },
				{ icon: 'email', label: 'Email', href: 'mailto:rohan.vachheta@example.com' }
			],
			customCss: [
				'./src/styles/portfolio.css',
			],
			components: {
				Head: './src/components/Head.astro',
			},
			sidebar: [
				{
					label: 'About',
					items: [
						{ label: 'Introduction', slug: 'about/intro' },
						{ label: 'Experience', slug: 'about/experience' },
						{ label: 'Skills', slug: 'about/skills' },
					],
				},
				{
					label: 'Projects',
					items: [
						{ label: 'Featured Projects', slug: 'projects/featured' },
						{ label: 'Web Applications', slug: 'projects/web-apps' },
						{ label: 'Open Source', slug: 'projects/open-source' },
					],
				},
				{
					label: 'Blog',
					items: [
						{ label: 'Technical Articles', slug: 'blog/technical' },
						{ label: 'Tutorials', slug: 'blog/tutorials' },
					],
				},
				{
					label: 'Contact',
					slug: 'contact',
				},
			],
		}),
	],
});
