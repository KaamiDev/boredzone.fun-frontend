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
				<NavLink
					style={{ display: localStorage.getItem('authToken') ? 'none' : '' }}
					activeClassName="active"
					to="/login"
				>
					Login
				</NavLink>
				<NavLink
					style={{ display: localStorage.getItem('authToken') ? 'none' : '' }}
					activeClassName="active"
					to="/register"
				>
					Register
				</NavLink>
				<NavLink
					style={{ display: localStorage.getItem('authToken') ? '' : 'none' }}
					activeClassName="active"
					to="/submit"
				>
					Submit Idea
				</NavLink>
				<NavLink
					style={{ display: localStorage.getItem('authToken') ? '' : 'none' }}
					activeClassName="active"
					to="/account"
				>
					My Account
				</NavLink>
			</div>
		</div>
	);
};

export default Nav;
