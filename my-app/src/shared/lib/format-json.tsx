import React from 'react';

type TValue = string | boolean | null | undefined | object;
const displayJson = (data: object) => {
	if (data === null) return null;
	const renderValue = (value: TValue): React.ReactNode => {
		if (value === null || !value) return null;
		switch (typeof value) {
			case 'object':
				return displayJson(value);
			case 'string':
				return <span style={{ color: 'green' }}>"{value}"</span>;
			case 'boolean':
				return <span style={{ color: 'green' }}>"{String(value)}"</span>;
			default:
				return <span>{value}</span>;
		}
	};

	const renderKey = (key: TValue) => {
		if (!key) return null;
		//@ts-ignore
		return <span style={{ color: 'blue' }}>{key}</span>;
	};

	const renderObject = (obj: object) => {
		if (obj === null || !obj) return null;
		return (
			<div style={{ marginLeft: '20px' }}>
				{'{'}
				{Object.entries(obj).map(([key, value]) => (
					<div key={key}>
						{renderKey(key)}: {renderValue(value as TValue)}
					</div>
				))}
				{'}'}
			</div>
		);
	};

	const renderArray = (arr: TValue[]) => {
		return (
			<div style={{ marginLeft: '20px' }}>
				{'['}
				{arr.map((item, index: number) => (
					<div key={index}>{renderValue(item)}</div>
				))}
				{']'}
			</div>
		);
	};

	if (Array.isArray(data)) {
		return renderArray(data);
	} else if (typeof data === 'object') {
		return renderObject(data);
	} else {
		return renderValue(data);
	}
};

export default displayJson;
