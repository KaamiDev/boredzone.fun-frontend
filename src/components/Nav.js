import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className="navbar">
			<div className="nav-heading">
				<Link to="/">
					<h2>BoredZone.fun</h2>
				</Link>
			</div>
			<div className="nav-links">
				<Link to="/" style={{ color: '#fff' }}>
					Home
				</Link>
				<Link to="/browse">Browse Ideas</Link>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</div>
		</div>
	);
};

export default Nav;
