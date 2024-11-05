const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@assets': path.resolve(__dirname, 'src/assets/'),
			'@utils': path.resolve(__dirname, 'src/utils/'),
		},
	},
};
