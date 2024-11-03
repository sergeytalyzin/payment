/// <reference types="react-scripts" />
declare module '*.svg' {
	import * as React from 'react';

	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;

	const src: string;
	export default src;
}

declare module '*.module.css' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.module.scss' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.module.sass' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.module.less' {
	const classes: { readonly [key: string]: string };
	export default classes;
}
declare module 'react-input-mask' {
	import { Component } from 'react';

	interface InputMaskProps {
		mask: string;
		value?: string;
		onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
		onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
		onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
		maskChar?: string;
		alwaysShowMask?: boolean;
		formatChars?: { [key: string]: string };
		placeholder?: string;
		disabled?: boolean;
		[key: string]: any;
	}

	export default class InputMask extends Component<InputMaskProps> {}
}
