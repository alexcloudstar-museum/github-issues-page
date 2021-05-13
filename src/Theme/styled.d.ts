import 'styled-components';

interface IPalette {
	main: string;
	contrastText: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		typography: {
			sizes: {
				xs: string;
				sm: string;
				md: string;
				lg: string;
				xl: string;
			};
			weight: {
				light: number;
				regular: number;
				medium: number;
				bold: number;
				black: number;
			};
		};
		palette: {
			common: {
				black: string;
				white: string;
				grey: string;
			};
			primary: IPalette;
		};
		mediaQuery: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
	}
}
