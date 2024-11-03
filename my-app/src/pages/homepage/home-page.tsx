import { HeartOutlined } from '@ant-design/icons';
import { Button, Typography, Layout, Space } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const { Title, Text } = Typography;
const { Content } = Layout;

const HomePage: React.FC = () => {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate('/payment');
	};

	return (
		<Layout className={styles.layout}>
			<Content className={styles.content}>
				<Space direction="vertical" align="center" size="large">
					<Title level={1} className={styles.title}>
						Поможем собрать Деньги Ване!
					</Title>
					<Text className={styles.description}>
						Ваня нуждается в нашей поддержке для важного мероприятия. Каждый взнос важен и помогает
						приблизить его к цели. Вместе мы можем больше!
					</Text>
					<Button
						type="primary"
						size="large"
						icon={<HeartOutlined />}
						onClick={handleButtonClick}
						className={styles.button}
					>
						Помочь Ване
					</Button>
				</Space>
			</Content>
		</Layout>
	);
};

export default HomePage;
