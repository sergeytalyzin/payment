import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';
import { App } from 'antd';
import ruRu from 'antd/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import React from 'react';
import { theme } from '@shared/config';

dayjs.locale('ru');

const WithAntd = (component: () => React.ReactNode) => () => {
	return (
		<ConfigProvider theme={theme} locale={ruRu}>
			<App>{component()}</App>
		</ConfigProvider>
	);
};

export default WithAntd;
