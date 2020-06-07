import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
	let history = useHistory();

	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ errMessage, setErrMessage ] = useState('');
	const [ submittingForm, setSubmittingForm ] = useState(false);

	const handleInputChange = (e) => {
		setErrMessage('');
		switch (e.target.placeholder) {
			case 'Username':
				setUsername(e.target.value);
				break;
			case 'Email':
				setEmail(e.target.value);
				break;
			case 'Password':
				setPassword(e.target.value);
				break;
			case 'Confirm Password':
				setConfirmPassword(e.target.value);
				break;
			default:
				// do nothing
				break;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmittingForm(true);
		try {
			const response = await axios.post('http://localhost:5000/register', {
				username,
				email,
				password,
				confirmPassword
			});
			history.push('/login?msg=' + response.data);
		} catch (error) {
			setErrMessage(error.response.data);
			setSubmittingForm(false);
		}
	};

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
				<p style={{ color: 'red' }}>{errMessage}</p>
				<form onSubmit={submittingForm ? () => false : handleSubmit}>
					<input onChange={handleInputChange} placeholder="Username" />
					<input onChange={handleInputChange} placeholder="Email" />
					<input type="password" onChange={handleInputChange} placeholder="Password" />
					<input type="password" onChange={handleInputChange} placeholder="Confirm Password" />
					<button type="submit" className="universal-btn login-btn">
						{submittingForm ? 'Loading..' : 'Register'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
