import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const SubmitCardReal = (props) => {
	let location = useLocation();
	const [ ideaTitle, setIdeaTitle ] = useState(queryString.parse(location.search).ideaTitle || '');
	const [ errMessage, setErrMessage ] = useState('');
	const [ successMessage, setSuccessMessage ] = useState('');
	const [ submittingForm, setSubmittingForm ] = useState(false);
	const [ ideaDescription, setIdeaDescription ] = useState('');

	const handleChange = (e) => {
		setSuccessMessage('');
		setErrMessage('');
		switch (e.target.tagName) {
			case 'INPUT':
				setIdeaTitle(e.target.value);
				break;
			case 'TEXTAREA':
				setIdeaDescription(e.target.value);
				break;
			default:
				// do nothing
				break;
		}
	};

	const handleSubmit = async (e) => {
		setErrMessage('');
		setSuccessMessage('');
		e.preventDefault();
		setSubmittingForm(true);
		try {
			const response = await axios.post(
				'http://192.168.0.23:5000/submit',
				{
					ideaTitle,
					ideaDescription
				},
				{
					headers: {
						authToken: localStorage.getItem('authToken')
					}
				}
			);
			setSuccessMessage(response.data);
			document.getElementById('idea-title-input').value = '';
			document.getElementById('idea-description-input').value = '';
			setIdeaTitle('');
			setIdeaDescription('');
			setSubmittingForm(false);
			props.afterSubmit();
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
		<div className="submit-card shadow">
			<p style={{ color: 'green' }}>{successMessage}</p>
			<p style={{ color: 'red' }}>{errMessage}</p>
			<div style={{ display: localStorage.getItem('authToken') ? '' : 'none' }}>
				<form onSubmit={handleSubmit}>
					<input
						id="idea-title-input"
						placeholder="Idea Title"
						value={ideaTitle}
						onChange={handleChange}
						style={{
							display: 'block',
							margin: '0 auto',
							marginBottom: '5px',
							width: '100%',
							padding: '5px',
							fontFamily: 'Arvo, serif'
						}}
					/>
					<textarea
						id="idea-description-input"
						placeholder="Idea Description. Feel free to be as detailed as you want."
						className="fake-submit-box-text"
						onChange={handleChange}
						value={ideaDescription}
						rows="5"
					/>
					<button type="submit" className="universal-btn submit-idea-btn">
						{submittingForm ? 'Loading..' : 'Submit Idea'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default SubmitCardReal;
