import React from 'react';
import withProviders from '@app/providers';

import './styles/index.scss';
import Routing from '@app/routing';

const App = () => {
	return (
		<>
			<Routing />
		</>
	);
};

export default withProviders(App);
