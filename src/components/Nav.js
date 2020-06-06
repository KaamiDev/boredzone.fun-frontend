import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<div className="navbar">
			<div className="nav-heading">
				<Link to="/">
					<h2>BoredZone.fun</h2>
				</Link>
			</div>
			<div className="nav-links">
				<NavLink exact activeClassName="active" to="/">
					Home
				</NavLink>
				<NavLink activeClassName="active" to="/browse">
					Browse Ideas
				</NavLink>
				<NavLink activeClassName="active" to="/login">
					Login
				</NavLink>
				<NavLink activeClassName="active" to="/register">
					Register
				</NavLink>
			</div>
		</div>
	);
};

export default Nav;
