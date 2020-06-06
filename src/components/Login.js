import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="login-contents">
			<div className="login-title">
				<h2>
					Login to an <span>Account</span>
				</h2>
				<h5>
					You can login to an account below. Alternatively, you can{' '}
					<Link className="color-link" to="/register">
						register
					</Link>.
				</h5>
			</div>
			<div className="login-card shadow">
				<h3>Login Below.</h3>
				<input placeholder="Email" />
				<input placeholder="Password" />
				<button className="universal-btn login-btn">Login</button>
			</div>
		</div>
	);
};

export default Login;
