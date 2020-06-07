import React from 'react';
import { Link } from 'react-router-dom';

const SubmitCard = () => {
	return (
		<div className="submit-card shadow">
			<div style={{ display: localStorage.getItem('authToken') ? 'none' : '' }}>
				<p>You must be logged in to submit an idea.</p>
				<p>
					Log in<Link className="color-link" to="/login">
						{' '}
						here
					</Link>.
					<br />Register for an account{' '}
					<Link className="color-link" to="/register">
						here
					</Link>.
				</p>
			</div>
			<div style={{ display: localStorage.getItem('authToken') ? '' : 'none' }}>
				<form>
					<textarea placeholder="Briefly describe your idea here.." className="fake-submit-box-text" />
					<button className="universal-btn submit-idea-btn">Continue</button>
				</form>
			</div>
		</div>
	);
};

export default SubmitCard;
