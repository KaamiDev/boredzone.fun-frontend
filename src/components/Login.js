import React, { useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

const Login = (props) => {
	const [ msg, setMsg ] = useState(queryString.parse(props.location.search).msg);
	const [ errMessage, setErrMessage ] = useState(queryString.parse(props.location.search).errmsg);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ submittingForm, setSubmittingForm ] = useState(false);

	const handleInputChange = (e) => {
		setMsg('');
		setErrMessage('');
		switch (e.target.placeholder) {
			case 'Email':
				setEmail(e.target.value);
				break;
			case 'Password':
				setPassword(e.target.value);
				break;
			default:
				// do nothing
				break;
		}
	};

	const handleSubmit = async (e) => {
		setMsg('');
		e.preventDefault();
		setSubmittingForm(true);
		try {
			const response = await axios.post('http://localhost:5000/login', {
				email,
				password
			});
			localStorage.setItem('authToken', response.data);
			window.location = '/';
		} catch (error) {
			setErrMessage(error.response.data);
			setSubmittingForm(false);
		}
	};

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
				<p style={{ color: 'green' }}>{msg}</p>
				<p style={{ color: 'red' }}>{errMessage}</p>
				<form onSubmit={handleSubmit}>
					<input type="email" onChange={handleInputChange} placeholder="Email" />
					<input type="password" onChange={handleInputChange} placeholder="Password" />
					<button type="submit" className="universal-btn login-btn">
						{submittingForm ? 'Loading..' : 'Login'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
