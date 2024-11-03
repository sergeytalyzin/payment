import React from 'react';

export type TLabel =
	| {
			text: React.ReactNode | string;
			required?: boolean;
	  }
	| string
	| React.ReactNode;

export type THelp = {
	text?: string;
};
