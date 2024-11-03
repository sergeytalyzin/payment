import { ThemeConfig } from 'antd/es/config-provider/context';
import { Colors } from '@shared/config/colors';

export const theme: ThemeConfig = {
	token: {
		colorPrimary: Colors.blue,
		colorPrimaryHover: Colors.darkBlue,
		colorError: Colors.coral,
		colorWarning: Colors.lightOrange,
		colorSuccess: Colors.greenYellow,
		colorInfo: Colors.darkBlue,
	},
	components: {
		Input: {
			colorPrimaryHover: Colors.darkBlue,
			colorBgContainer: Colors.gray4,
			colorBgContainerDisabled: Colors.gray3,
			colorBorder: 'transparent',
			borderRadius: 10,
			fontSize: 16,
			controlHeight: 48,
		},
		InputNumber: {
			colorPrimaryHover: Colors.darkBlue,
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
		Segmented: {
			// itemSelectedBg: 'transparent',
			itemSelectedColor: Colors.dark1,
			itemColor: Colors.gray2,
			itemHoverColor: Colors.dark1,
		},
		Descriptions: { fontSize: 16 },
	},
};
