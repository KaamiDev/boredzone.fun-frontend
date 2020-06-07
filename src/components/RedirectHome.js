import React from 'react';
import { useHistory } from 'react-router-dom';

const RedirectHome = () => {
	let history = useHistory();

	history.push('/');

	return (
		<div className="make-sure-footer-stays">
			<p>Redirecting...</p>
		</div>
	);
};

export default RedirectHome;
