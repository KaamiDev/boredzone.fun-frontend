import React from 'react';
import { Link } from 'react-router-dom';
import IdeaCard from './IdeaCard';
import SubmitCard from './SubmitCard';

const Browse = () => {
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
				<select className="sort-selector">
					<option>Most Popular</option>
					<option>Least Popular</option>
					<option>Newest</option>
					<option>Oldest</option>
				</select>
				<IdeaCard />
				<IdeaCard />
				<IdeaCard />
				<IdeaCard />
				<IdeaCard />
				<IdeaCard />
				<IdeaCard />
				<Link className="color-link show-more" to="/browse">
					Load More..
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
	);
};

export default Browse;
