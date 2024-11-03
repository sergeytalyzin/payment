import { Spin } from 'antd';
import React, { Suspense } from 'react';

const Loading = (props: { children: React.ReactNode }) => (
	<Suspense
		fallback={
			<div className="spin-suspense">
				<Spin size="large" style={{ width: '100%', height: '100%' }} />
			</div>
		}
	>
		{props.children}
	</Suspense>
);
export default Loading;
