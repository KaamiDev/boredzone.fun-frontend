import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Browse from './components/Browse';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/browse" component={Browse} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
