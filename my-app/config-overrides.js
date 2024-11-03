// eslint-disable-next-line @typescript-eslint/no-var-requires
const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, _env) {
	alias({
		'@app': 'src/app',
		'@processes': 'src/processes',
		'@pages': 'src/pages',
		'@widgets': 'src/widgets',
		'@features': 'src/features',
		'@entities': 'src/entities',
		'@shared': 'src/shared',
	})(config);

	return config;
};
