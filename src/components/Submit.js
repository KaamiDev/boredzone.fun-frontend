import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IdeaCard from './IdeaCard';
import SubmitCardReal from './SubmitCardReal';

const Submit = () => {
	const [ ideas, setIdeas ] = useState([]);
	const [ displaying, setDisplaying ] = useState(10);

	const apiCall = async () => {
		try {
			let response = await axios.get('http://192.168.0.23:5000/get-data/submitted/', {
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
							deletable={true}
							key={idea._id}
						/>
					);
				})
			);
			setDisplaying(10);
		} catch (error) {
			if (error.response.status === 403) {
				window.location = '/logout';
			}
		}
	};

	useEffect(() => {
		apiCall();
	}, []);

	const handleLoadMore = (e) => {
		e.preventDefault();
		setDisplaying((displaying) => displaying + 10);
	};

	return (
		<div className="home-contents">
			<div className="submit-column" style={{ marginRight: '30px', width: '25%' }}>
				<div className="column-heading">
					<h2>
						Submit an <span>Idea</span>
					</h2>
					<h5>Submit your an idea of your own below!</h5>
				</div>
				<SubmitCardReal afterSubmit={apiCall} />
			</div>
			<div className="popular-column" style={{ marginLeft: '30px' }}>
				<div className="column-heading">
					<h2>
						My Submitted <span>Ideas</span>
					</h2>
					<h5>Here are the ideas that you've currently submitted!</h5>
				</div>
				{ideas.slice(0, displaying)}
				<p style={{ display: ideas.length ? 'none' : '' }}>You haven't submitted any ideas yet.</p>
				<a
					style={{ display: displaying >= ideas.length ? 'none' : '' }}
					onClick={handleLoadMore}
					className="color-link show-more"
					href="/submit"
				>
					Load More..
				</a>
			</div>
		</div>
	);
};

export default Submit;
