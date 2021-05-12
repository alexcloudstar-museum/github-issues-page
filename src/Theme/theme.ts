import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
	typography: {
		sizes: {
			xs: '14px',
			sm: '16px',
            md: '18px',
            lg: '24px',
            xl: '32px',
		}
	},
    palette: {
        common: {
            black: '#222831',
			white: '#ffffff',
        },
        primary: {
			main: '#914bb4',
			contrastText: '#ffffff'
		},
		secondary: {
			main: '#6eb44b',
			contrastText: '#ffffff'
		}
	},
	mediaQuery: {
		xs: '374px',
		sm: '575px',
		md: '767px',
		lg: '991px',
		xl: '1199px'
	}
    }
};
