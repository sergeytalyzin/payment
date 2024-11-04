import { Button, Col, notification, Row } from 'antd';
import sha256 from 'crypto-js/sha256';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import {
	InputNumberComponent,
	InputNumberMaskComponent,
	InputPassword,
	InputText,
} from '@shared/ui/form-items';
import { WithErrorBoundary } from '@shared/ui/with-error-boundary';
import styles from './styles.module.scss';
const defaultValues: Form = {
	card: '',
	expiry: '',
	cvv: null,
	amount: null,
	message: '',
	name: '',
};

const Form = () => {
	const navigate = useNavigate();

	const methods = useForm<Form>({
		mode: 'all',
		defaultValues: defaultValues,
	});

	const { handleSubmit, control, getValues, setValue } = methods;

	const onSubmit = () => {
		const values = getValues();
		console.log('values', values);
		const cardNumber = values.card?.replace(/\s/g, ''); // Убираем пробелы для проверки
		if (cardNumber && !validateCardNumberLuhn(cardNumber)) {
			notification.error({
				message: 'Ошибка',
				description: 'Номер карты некорректен. Пожалуйста, проверьте и попробуйте снова.',
			});
			return;
		}

		const apiKey = '316b2be8-3475-4462-bd57-c7794d4bdb53';
		const secretKey = '1234567890';
		const transactionId = uuidv4();
		const amount = values.amount;
		const description = 'Описание платежа';
		const email = 'example@example.com';

		const hashString = `${apiKey}${transactionId}${amount}${secretKey}`;
		const hashSum = sha256(hashString).toString();

		const requestData = {
			hash_sum: hashSum,
			transaction: transactionId,
			description: description,
			api_key: apiKey,
			amount: amount,
			email: email,
			custom_data: {
				initiator: 'Иван.К',
				purpose: 'Экскурсия',
			},
		};

		// Переход на страницу подтверждения с данными запроса
		navigate('/payment-success', { state: requestData });
	};
	return (
		<div className={styles.container}>
			<div className={styles.form}>
				<h2>Иван К. собирает 10 000 ₽ на "Экскурсия"</h2>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Row>
							<InputNumberMaskComponent
								main={{
									label: { text: 'Номер карты', required: true },
									placeholder: '0000 0000 0000 0000',
								}}
								rules={{
									required: { message: 'Поле обязательное', value: true },
								}}
								name={'card'}
								control={control}
							/>
						</Row>
						<Row gutter={[8, 8]}>
							<Col lg={12} span={24}>
								<InputNumberMaskComponent
									main={{
										label: { text: 'Срок действия', required: true },
										placeholder: 'ММ/ГГ',
										mask: '99/99',
									}}
									rules={{
										required: { message: 'Поле обязательное', value: true },
									}}
									name={'expiry'}
									control={control}
								/>
							</Col>
							<Col lg={12} span={24}>
								<InputPassword
									main={{
										label: { text: 'CVV', required: true },
										placeholder: 'Введите CVV',
									}}
									rules={{
										required: { message: 'Поле обязательное', value: true },
										maxLength: { value: 3, message: 'Должно содержать максимум 3 символа' },
										onChange: (e: any) => {
											const value = e.target.value.replace(/\D/g, '');
											e.target.value = value;
											setValue('cvv', value);
										},
									}}
									name={'cvv'}
									control={control}
								/>
							</Col>
						</Row>
						<Row>
							<InputNumberComponent
								main={{
									label: { text: 'Сумма перевода', required: true },
									placeholder: 'Введите сумму',
									prefix: '₽',
								}}
								rules={{
									required: { message: 'Поле обязательное', value: true },
									min: { value: 10, message: 'Сумма должна быть не менее 10 рублей' },
								}}
								name={'amount'}
								control={control}
							/>
						</Row>
						<Row>
							<InputText
								name={'name'}
								main={{
									label: { text: 'Ваше имя', required: true },
									placeholder: 'Введите имя',
								}}
								control={control}
								rules={{
									required: { message: 'Поле обязательное', value: true },
									validate: {
										// Ограничение длины в байтах
										maxBytes: (value) => {
											const byteLength = new TextEncoder().encode(value).length;
											return byteLength <= 50 || 'Длина не должна превышать 50 байт';
										},
									},
								}}
							/>
						</Row>
						<Row>
							<InputText
								name={'message'}
								main={{
									label: 'Сообщение получателю',
									placeholder: '',
									allowClear: true,
									maxLength: 50,
									showCount: true,
								}}
								control={control}
								rules={{
									validate: {
										maxBytes: (value) => {
											const byteLength = new TextEncoder().encode(value).length;
											return byteLength <= 50 || 'Длина не должна превышать 50 байт';
										},
									},
								}}
							/>
						</Row>
						<div className={styles.btn}>
							<Button type={'primary'} htmlType={'submit'}>
								Перевести
							</Button>
							<Button type={'default'} onClick={() => navigate('/')}>
								Вернуться
							</Button>
						</div>
					</form>
				</FormProvider>
			</div>
		</div>
	);

	function validateCardNumberLuhn(cardNumber: string) {
		let sum = 0;
		let shouldDouble = false;

		for (let i = cardNumber.length - 1; i >= 0; i--) {
			let digit = parseInt(cardNumber[i]);

			if (shouldDouble) {
				digit *= 2;
				if (digit > 9) digit -= 9;
			}

			sum += digit;
			shouldDouble = !shouldDouble;
		}

		return sum % 10 === 0;
	}
};
export default WithErrorBoundary(Form);
