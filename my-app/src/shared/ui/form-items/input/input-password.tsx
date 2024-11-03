import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Input, InputProps } from 'antd';
import classNames from 'classnames';
import React, { FC } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { THelp, TLabel } from '@shared/ui/form-items';
import LabelComponent from '../label';
export type InputPasswordProps = {
	main: { label?: TLabel; help?: THelp } & InputProps;
};
type Props = InputPasswordProps & UseControllerProps<any>;

const InputPassword: FC<Props> = ({ main, ...props }) => {
	const { className: classProps, disabled, label, help, ...rest } = main;
	const {
		field,
		fieldState: { error },
	} = useController(props);

	const errorField = { errorText: error?.message, hasError: error };

	return (
		<div className="form-item ">
			{label && <LabelComponent name={field.name} label={label} />}
			<Input.Password
				autoComplete={main.autoComplete ?? 'off'}
				className={classNames(classProps)}
				placeholder={main.placeholder}
				id={field.name}
				disabled={disabled}
				status={errorField.hasError ? 'error' : ''}
				{...rest}
				{...field}
				iconRender={(value) => (value ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
			/>
			<div className={classNames('errorField', { hasError: errorField?.hasError })}>
				{errorField.errorText && <span>{errorField.errorText}</span>}
				{help?.text && (!error || !errorField.hasError) && <span>{help.text}</span>}
			</div>
		</div>
	);
};
export default InputPassword;
