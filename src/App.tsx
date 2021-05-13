import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { defaultTheme } from './Theme/theme';
import GlobalStyles from './Theme/globalStyles';
import { AppContainer } from './containers';
import { store } from './state';

const App = (): JSX.Element => (
	<ThemeProvider theme={defaultTheme}>
		<Provider store={store}>
			<GlobalStyles />
			<AppContainer />
		</Provider>
	</ThemeProvider>
);

export default App;
