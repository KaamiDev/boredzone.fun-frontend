import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className="login-contents">
			<div className="login-title">
				<h2>
					Register for an <span>Account</span>
				</h2>
				<h5>
					You can register for an account below. Alternatively, you can{' '}
					<Link className="color-link" to="/login">
						login
					</Link>.
				</h5>
			</div>
			<div className="login-card shadow">
				<h3>Register Below.</h3>
				<input placeholder="Username" />
				<input placeholder="Email" />
				<input placeholder="Password" />
				<input placeholder="Confirm Password" />
				<button className="universal-btn login-btn">Register</button>
			</div>
		</div>
	);
};

export default Register;
