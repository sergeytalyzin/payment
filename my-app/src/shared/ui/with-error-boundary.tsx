import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import React, { FC } from 'react';

export function WithErrorBoundary<T extends object>(Component: FC<T>) {
	return (props: T) => {
		return (
			<ErrorBoundary message={<MessageComponent />} description={<DescriptionComponent />}>
				<Component {...props} />
			</ErrorBoundary>
		);
	};
}
function MessageComponent() {
	return <div>Что-то пошло не так</div>;
}
function DescriptionComponent() {
	return <div>Попробуйте обновить страницу или связаться с технической поддержкой</div>;
}
