import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
	typography: {
		sizes: {
			xs: '14px',
			sm: '16px',
			md: '18px',
			lg: '24px',
			xl: '32px'
		},
		weight: {
			light: 300,
			regular: 400,
			medium: 500,
			bold: 700,
			black: 900
		}
	},
	palette: {
		common: {
			black: '#222831',
			white: '#ffffff',
			grey: '#8b949e'
		},
		primary: {
			main: '#161B22',
			contrastText: '#30363d'
		}
	},
	mediaQuery: {
		xs: '374px',
		sm: '575px',
		md: '767px',
		lg: '991px',
		xl: '1199px'
	}
};
