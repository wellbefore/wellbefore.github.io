// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
// https://astro.build/config
export default defineConfig({
	site: "https://wellbefore.app",
	integrations: [
		starlight({
			title: 'WellBefore',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/wellbefore' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', slug: 'guides/getting_started' },
						{ label: 'Onboarding', slug: 'guides/onboarding' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [starlightThemeRapide()],
		}),
	],
});
