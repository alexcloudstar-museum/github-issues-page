import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './Theme/theme';
import GlobalStyles from './Theme/globalStyles';
import { AppContainer } from './containers';

const App = (): JSX.Element => (
	<ThemeProvider theme={defaultTheme}>
		<GlobalStyles />
		<AppContainer />
	</ThemeProvider>
);

export default App;
