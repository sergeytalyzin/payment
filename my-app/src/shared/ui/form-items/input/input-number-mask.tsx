import { InputNumberProps } from 'antd';
import classNames from 'classnames';
import React, { FC } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import InputMask from 'react-input-mask';
import LabelComponent from '../label';
import { THelp, TLabel } from '../types';

export type InputTextProps = {
	main: { label?: TLabel; help?: THelp; mask?: string } & InputNumberProps;
};
type Props = InputTextProps & UseControllerProps<any>;

const InputNumberMaskComponent: FC<Props> = ({ main, ...props }) => {
	const {
		className: classProps,
		label,
		help,
		disabled,
		mask = '9999 9999 9999 9999',
		placeholder,
	} = main;
	const {
		field,
		fieldState: { error },
	} = useController(props);

	const errorField = { errorText: error?.message, hasError: error };

	return (
		<div className={classNames('form-item form-item-mask', { hasError: errorField?.hasError })}>
			{label && <LabelComponent name={field.name} label={label} />}
			<span className="ant-input-affix-wrapper css-dev-only-do-not-override-1e2br56 ant-input-outlined ant-input-password">
				<InputMask
					mask={mask}
					autoComplete={main.autoComplete ?? 'off'}
					className={classNames('form-item__input-mask', classProps)}
					disabled={disabled}
					value={field.value || ''} // Убедитесь, что значение корректно синхронизируется
					onChange={field.onChange} // Свяжите onChange с react-hook-form
					onBlur={field.onBlur}
					placeholder={placeholder}
				>
					{(inputProps: any) => <input {...inputProps} />}
				</InputMask>
			</span>

			{errorField?.hasError && (
				<div className={classNames('errorField', { hasError: errorField?.hasError })}>
					{errorField.errorText && <span>{errorField.errorText}</span>}
					{help?.text && (!error || !errorField.hasError) && <span>{help.text}</span>}
				</div>
			)}
		</div>
	);
};

export default InputNumberMaskComponent;
