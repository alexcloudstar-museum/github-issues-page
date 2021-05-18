import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { defaultTheme } from './Theme/theme';
import GlobalStyles from './Theme/globalStyles';
import { AppContainer } from './containers';
import { store } from './state';
import { IssueBody } from './shared/components';

const App = (): JSX.Element => (
	<Router basename="/">
		<Switch>
			<ThemeProvider theme={defaultTheme}>
				<Provider store={store}>
					<GlobalStyles />
					<Route exact path="/">
						<AppContainer />
					</Route>
					<Route path="/issue/:id" component={IssueBody} />
				</Provider>
			</ThemeProvider>
		</Switch>
	</Router>
);

export default App;
