import React from 'react';

const Logout = () => {
	localStorage.clear();
	window.location = '/';
	return (
		<div className="make-sure-footer-stays">
			<p>Logging out...</p>
		</div>
	);
};

export default Logout;
