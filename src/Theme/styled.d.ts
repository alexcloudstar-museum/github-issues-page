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
		};
		palette: {
			common: {
				black: string;
				white: string;
			};
			primary: IPalette;
			secondary: IPalette;
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
