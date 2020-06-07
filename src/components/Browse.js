import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IdeaCard from './IdeaCard';
import SubmitCard from './SubmitCard';

const Browse = () => {
	const [ ideas, setIdeas ] = useState([]);
	const [ displaying, setDisplaying ] = useState(10);

	const apiCall = async (sort) => {
		let response = await axios.get('https://api.backend.boredzone.fun/get-data/browse/' + sort, {
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

	useEffect(() => {
		apiCall('mostpopular');
	}, []);

	const handleChange = (e) => {
		setDisplaying(10);
		apiCall(e.target.value);
	};

	const handleLoadMore = (e) => {
		e.preventDefault();
		setDisplaying((displaying) => displaying + 10);
	};

	return (
		<div className="home-contents">
			<div className="popular-column">
				<div className="column-heading" style={{ marginBottom: '10px' }}>
					<h2>
						Browse <span>Ideas</span>
					</h2>
					<h5>Browse all the user submitted ideas below!</h5>
				</div>
				<span className="sort-selector-label">Sort By:</span>
				<select onChange={handleChange} className="sort-selector">
					<option value="mostpopular">Most Popular</option>
					<option value="leastpopular">Least Popular</option>
					<option value="newest">Newest</option>
					<option value="oldest">Oldest</option>
				</select>
				{ideas.slice(0, displaying)}
				<p style={{ display: ideas.length ? 'none' : '' }}>No ideas to display.</p>
				<a
					onClick={handleLoadMore}
					style={{ display: displaying >= ideas.length ? 'none' : '' }}
					className="color-link show-more"
					href="/browse"
				>
					Load More..
				</a>
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
	);
};

export default Browse;
