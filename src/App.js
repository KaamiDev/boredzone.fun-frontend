import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RedirectHome from './components/RedirectHome';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Browse from './components/Browse';
import Submit from './components/Submit';
import Login from './components/Login';
import Logout from './components/Logout';
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
					<Route path="/login" component={localStorage.getItem('authToken') ? RedirectHome : Login} />
					<Route path="/register" component={localStorage.getItem('authToken') ? RedirectHome : Register} />
					<Route path="/submit" component={localStorage.getItem('authToken') ? Submit : RedirectHome} />
					<Route path="/account" component={localStorage.getItem('authToken') ? Submit : RedirectHome} />
					<Route path="/logout" component={Logout} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
