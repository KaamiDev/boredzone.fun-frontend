import React from 'react';
import IdeaCard from './IdeaCard';
import SubmitCardReal from './SubmitCardReal';
import { Link } from 'react-router-dom';

const Submit = () => {
	return (
		<div className="home-contents">
			<div className="submit-column" style={{ marginRight: '30px', width: '25%' }}>
				<div className="column-heading">
					<h2>
						Submit an <span>Idea</span>
					</h2>
					<h5>Submit your an idea of your own below!</h5>
				</div>
				<SubmitCardReal />
			</div>
			<div className="popular-column" style={{ marginLeft: '30px' }}>
				<div className="column-heading">
					<h2>
						My Submitted <span>Ideas</span>
					</h2>
					<h5>Here are the ideas that you've currently submitted!</h5>
				</div>
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
		</div>
	);
};

export default Submit;
