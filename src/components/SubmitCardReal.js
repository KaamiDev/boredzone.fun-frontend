import React from 'react';
import { Link } from 'react-router-dom';

const SubmitCardReal = () => {
	return (
		<div className="submit-card shadow">
			<div style={{ display: localStorage.getItem('authToken') ? '' : 'none' }}>
				<form>
					<input
						placeholder="Idea Title"
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
						placeholder="Idea Description. Feel free to be as detailed as you want."
						className="fake-submit-box-text"
					/>
					<button className="universal-btn submit-idea-btn">Submit Idea</button>
				</form>
			</div>
		</div>
	);
};

export default SubmitCardReal;
