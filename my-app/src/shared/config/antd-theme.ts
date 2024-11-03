import { ThemeConfig } from 'antd/es/config-provider/context';
import { Colors } from '@shared/config/colors';

export const theme: ThemeConfig = {
	token: {
		colorPrimary: Colors.dark1,
		colorPrimaryHover: Colors.dark2,
		colorError: Colors.coral,
		colorWarning: Colors.lightOrange,
		colorSuccess: Colors.greenYellow,
		colorInfo: Colors.dark2,
	},
	components: {
		Table: { rowSelectedBg: Colors.gray, rowSelectedHoverBg: Colors.gray2 },
		Checkbox: {
			colorPrimary: Colors.green,
			colorPrimaryHover: Colors.green,
		},
		Pagination: {
			colorPrimary: Colors.baseColor,
			colorPrimaryHover: Colors.baseColor,
			lineWidth: 0,
			colorBgContainer: Colors.dark1,
		},
		Input: {
			colorPrimaryHover: Colors.dark2,
			colorBgContainer: Colors.gray4,
			colorBgContainerDisabled: Colors.gray3,
			colorBorder: 'transparent',
			borderRadius: 10,
			fontSize: 16,
			controlHeight: 48,
		},
		InputNumber: {
			colorPrimaryHover: Colors.dark2,
			colorBgContainer: Colors.gray4,
			colorBgContainerDisabled: Colors.gray3,
			colorBorder: 'transparent',
			borderRadius: 10,
			fontSize: 16,
			controlHeight: 48,
		},

		Button: {
			fontSize: 15,
			colorLink: Colors.blue,
			colorLinkHover: Colors.darkBlue,
		},
		Select: {
			fontSize: 16,
			colorBgContainer: Colors.gray4,
			colorBgContainerDisabled: Colors.gray3,
			colorBorder: 'transparent',
			colorPrimaryHover: Colors.dark2,
			controlHeight: 48,
		},
		Switch: {
			colorPrimary: Colors.greenYellow,
			colorPrimaryHover: Colors.greenYellow,
		},
		Segmented: {
			// itemSelectedBg: 'transparent',
			itemSelectedColor: Colors.dark1,
			itemColor: Colors.gray2,
			itemHoverColor: Colors.dark1,
		},
		Descriptions: { fontSize: 16 },
	},
};
