import { Button } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import displayJson from '@shared/lib/format-json';
import styles from './styles.module.scss';

const PaymentSuccess: React.FC = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2 className={styles.title}>Подтверждение отправки данных</h2>
				<div className={styles.data}>
					<pre>{displayJson(state)}</pre>
				</div>
				<Button className={styles.button} type="primary" onClick={() => navigate('/')}>
					Повторить
				</Button>
			</div>
		</div>
	);
};

export default PaymentSuccess;
