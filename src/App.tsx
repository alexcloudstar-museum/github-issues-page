import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './Theme/theme';
import GlobalStyles from './Theme/globalStyles';

const App = (): JSX.Element => (
	<ThemeProvider theme={defaultTheme}>
		<GlobalStyles />
		<h1>Hello world!</h1>
	</ThemeProvider>
);

export default App;
