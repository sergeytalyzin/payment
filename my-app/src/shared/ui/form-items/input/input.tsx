import { Input, InputProps } from 'antd';
import classNames from 'classnames';
import React, { FC } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import LabelComponent from '../label';
import { THelp, TLabel } from '../types';

export type InputTextProps = {
	main: { label?: TLabel; help?: THelp } & InputProps;
};
type Props = InputTextProps & UseControllerProps<any>;
const InputText: FC<Props> = ({ main, ...props }) => {
	const { className: classProps, disabled, label, help, ...rest } = main;
	const {
		field,
		fieldState: { error },
	} = useController(props);

	const errorField = { errorText: error?.message, hasError: error };

	return (
		<div className={classNames('form-item', { hasError: errorField?.hasError })}>
			{label && <LabelComponent name={field.name} label={label} />}
			<Input
				autoComplete={main.autoComplete ?? 'off'}
				className={classNames('form-item__input', classProps)}
				placeholder={main.placeholder}
				status={errorField.hasError ? 'error' : ''}
				{...rest}
				{...field}
				disabled={disabled}
			/>

			{errorField?.hasError && (
				<div className={classNames('errorField', { hasError: errorField?.hasError })}>
					{errorField.errorText && <span>{errorField.errorText}</span>}
					{help?.text && (!error || !errorField.hasError) && <span>{help.text}</span>}
				</div>
			)}
		</div>
	);
};
export default InputText;
