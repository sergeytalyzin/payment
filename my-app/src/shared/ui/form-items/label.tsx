import React, { FC } from 'react';
import { TLabel } from './types';

const LabelComponent: FC<{ name: string; label: TLabel }> = ({ name, label }) => {
	if (typeof label === 'object') {
		if (label !== null && 'text' in label) {
			return (
				<label htmlFor={name}>
					{label.text}
					{label.required && <span className={'required'}>*</span>}
				</label>
			);
		} else {
			return <label htmlFor={name}>{label}</label>;
		}
	}
	return <label htmlFor={name}>{label}</label>;
};

export default LabelComponent;
