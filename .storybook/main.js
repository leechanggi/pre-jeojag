const path = require('path');

module.exports = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: ['@storybook/preset-create-react-app', '@storybook/addon-onboarding', '@storybook/addon-essentials', '@chromatic-com/storybook', '@storybook/addon-interactions'],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	staticDirs: ['..\\public'],
	webpackFinal: async config => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@/*': path.resolve(__dirname, '../src/*'),
			'@components': path.resolve(__dirname, '../src/components/'),
			'@styles': path.resolve(__dirname, '../src/styles/'),
			'@assets': path.resolve(__dirname, '../src/assets/'),
			'@utils': path.resolve(__dirname, '../src/utils/'),
		};
		return config;
	},
};
