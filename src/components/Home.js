import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IdeaCard from './IdeaCard';
import SubmitCard from './SubmitCard';
import { Link } from 'react-router-dom';

const Home = () => {
	const [ ideas, setIdeas ] = useState([]);

	useEffect(() => {
		const apiCall = async () => {
			let response = await axios.get('https://api.backend.boredzone.fun/get-data/home', {
				headers: { authtoken: localStorage.getItem('authToken') }
			});
			setIdeas(
				response.data.map((idea) => {
					let d = new Date(idea.date);
					return (
						<IdeaCard
							title={idea.title}
							description={idea.description}
							user={idea.user}
							date={d.toLocaleString()}
							id={idea._id}
							rank={idea.rank}
							upvoted={idea.upvoted}
							downvoted={idea.downvoted}
							key={idea._id}
						/>
					);
				})
			);
		};
		apiCall();
	}, []);

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

					{ideas}
					<p style={{ display: ideas.length ? 'none' : '' }}>No ideas to display.</p>
					<Link style={{ display: ideas.length ? '' : 'none' }} className="color-link show-more" to="/browse">
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
