import React, { useMemo } from 'react';
import { useRoutes } from 'react-router-dom';
import HomePage from '@pages/homepage/home-page';
import Payment from '@pages/payment/ui/payment';
import PaymentSuccess from '@pages/payment-success/payment-success';
import Loading from '@shared/ui/loading';

const Routing = () => {
	const routesMap = useMemo(() => {
		return [
			{
				path: '/',
				element: <HomePage />,
			},
			{ path: '/payment', element: <Payment /> },
			{ path: '/payment-success', element: <PaymentSuccess /> },
		];
	}, []);
	const routes = useRoutes(routesMap);

	return <Loading>{routes}</Loading>;
};
export default Routing;
