import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="home-body">
			<div className="header-section">
				<h1>Welcome to BoredZone.fun!</h1>
				<h3>
					If you're bored during social distancing then you've come to the right place! BoredZone.fun is the
					best ever-growing collection of user submitted ideas of things to do while stuck at home.
				</h3>
				<div className="header-buttons">
					<Link to="/browse">Browse Ideas</Link>
					<Link to="/login">Login</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
