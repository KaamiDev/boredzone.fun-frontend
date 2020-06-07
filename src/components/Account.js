import React, { useState, useEffect } from 'react';
import axios from 'axios';
import pfp from '../default.png';

const Account = () => {
	const [ errMessage, setErrMessage ] = useState('');
	const [ oldPassword, setOldPassword ] = useState('');
	const [ newPassword, setNewPassword ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ submittingForm, setSubmittingForm ] = useState(false);
	const [ confirmNewPassword, setConfirmNewPassword ] = useState('');
	const [ successMessage, setSuccessMessage ] = useState('');

	useEffect(() => {
		const apiCall = async () => {
			try {
				let response = await axios.get('http://192.168.0.23:5000/account/getinfo', {
					headers: { authtoken: localStorage.getItem('authToken') }
				});
				setUsername(response.data);
			} catch (error) {
				if (error.response.status === 403) {
					window.location = '/logout';
				}
			}
		};
		apiCall();
	}, []);

	const handleChange = (e) => {
		setSuccessMessage('');
		setErrMessage('');
		switch (e.target.placeholder) {
			case 'Old Password':
				setOldPassword(e.target.value);
				break;
			case 'New Password':
				setNewPassword(e.target.value);
				break;
			case 'Confirm New Password':
				setConfirmNewPassword(e.target.value);
				break;
			default:
				// do nothing
				break;
		}
	};

	const handleSubmit = async (e) => {
		setSuccessMessage('');
		setErrMessage('');
		e.preventDefault();
		setSubmittingForm(true);
		try {
			const response = await axios.post(
				'http://192.168.0.23:5000/account/changepw',
				{
					oldPassword,
					newPassword,
					confirmNewPassword
				},
				{
					headers: {
						authToken: localStorage.getItem('authToken')
					}
				}
			);
			setSuccessMessage(response.data);
			document.getElementById('oldPassword').value = '';
			document.getElementById('newPassword').value = '';
			document.getElementById('confirmNewPassword').value = '';
			setOldPassword('');
			setNewPassword('');
			setConfirmNewPassword('');
			setSubmittingForm(false);
		} catch (error) {
			if (error.response.status === 403) {
				window.location = '/logout';
			} else {
				setErrMessage(error.response.data);
				setSubmittingForm(false);
			}
		}
	};

	return (
		<div className="home-contents">
			<div className="submit-column" style={{ marginRight: '30px', width: '25%' }}>
				<div className="column-heading">
					<h2>
						My <span>Profile</span>
					</h2>
					<h5> </h5>
				</div>

				<div className="profile-card shadow">
					<div className="profile-image-container">
						<img src={pfp} alt="profilepic" />
					</div>
					<div className="profile-details-container">
						<h3 style={{ textTransform: 'capitalize' }}>{username}</h3>
						<h5>User</h5>
					</div>
					<div className="profile-logout-container">
						<button
							onClick={() => {
								window.location = '/logout';
							}}
							className="universal-btn"
						>
							Logout
						</button>
					</div>
				</div>
			</div>
			<div className="popular-column" style={{ marginLeft: '30px', width: '20%' }}>
				<div className="column-heading">
					<h2>
						Change <span>Password</span>
					</h2>
					<h5> </h5>
				</div>
				<div className="login-card shadow" style={{ width: '100%' }}>
					<h3>Change Password Below.</h3>
					<p style={{ color: 'red' }}>{errMessage}</p>
					<p style={{ color: 'green' }}>{successMessage}</p>
					<form onSubmit={handleSubmit}>
						<input
							onChange={handleChange}
							id="oldPassword"
							type="password"
							style={{ width: '90%' }}
							placeholder="Old Password"
						/>
						<input
							onChange={handleChange}
							id="newPassword"
							type="password"
							style={{ width: '90%' }}
							placeholder="New Password"
						/>
						<input
							id="confirmNewPassword"
							onChange={handleChange}
							type="password"
							style={{ width: '90%' }}
							placeholder="Confirm New Password"
						/>
						<button type="submit" className="universal-btn login-btn">
							{submittingForm ? 'Loading..' : 'Change Password'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Account;
