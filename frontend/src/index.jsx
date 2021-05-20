import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Music from './Music';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={App} />
				<Route path="/music" component={Music} />
			</Switch>
		</ BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
