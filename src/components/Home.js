import React from 'react';
import IdeaCard from './IdeaCard';
import SubmitCard from './SubmitCard';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="home-body">
			<div className="header-section">
				<h1>Welcome to BoredZone.fun!</h1>
				<h3>
					If you're bored during social distancing then you've come to the right place! BoredZone.fun is the
					best ever-growing collection of user submitted ideas for things to do while stuck at home.
				</h3>
				<div className="header-buttons">
					<Link to="/browse">Browse Ideas</Link>
					<Link to={localStorage.getItem('authToken') ? '/account' : '/login'}>
						{localStorage.getItem('authToken') ? 'Account' : 'Login'}
					</Link>
				</div>
			</div>
			<div className="home-contents">
				<div className="popular-column">
					<div className="column-heading">
						<h2>
							Popular <span>Ideas</span>
						</h2>
						<h5>Some recently submitted popular ideas!</h5>
					</div>

					<IdeaCard />
					<IdeaCard />

					<Link className="color-link show-more" to="/browse">
						View All
					</Link>
				</div>
				<div className="submit-column">
					<div className="column-heading">
						<h2>
							Submit an <span>Idea</span>
						</h2>
						<h5>Submit an idea of your own below!</h5>
					</div>
					<SubmitCard />
				</div>
			</div>
		</div>
	);
};

export default Home;
