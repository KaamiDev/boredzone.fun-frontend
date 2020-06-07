import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const IdeaCard = (props) => {
	let history = useHistory();

	const [ rank, setRank ] = useState(props.rank);
	const [ upvoted, setUpvoted ] = useState(props.upvoted);
	const [ downvoted, setDownvoted ] = useState(props.downvoted);

	const handleUpvote = async () => {
		if (localStorage.getItem('authToken')) {
			try {
				const response = await axios.post(
					'http://localhost:5000/rank-post/upvote/' + props.id,
					{},
					{
						headers: {
							authToken: localStorage.getItem('authToken')
						}
					}
				);
				setRank(response.data.newRank);
				setUpvoted(response.data.upvoted);
				setDownvoted(response.data.downvoted);
			} catch (error) {
				if (error.response.status === 403) {
					window.location = '/logout';
				}
			}
		} else {
			history.push('/login?errmsg=' + 'You must be logged in to upvote ideas.');
		}
	};

	const handleDownvote = async () => {
		if (localStorage.getItem('authToken')) {
			try {
				const response = await axios.post(
					'http://localhost:5000/rank-post/downvote/' + props.id,
					{},
					{
						headers: {
							authToken: localStorage.getItem('authToken')
						}
					}
				);
				setRank(response.data.newRank);
				setUpvoted(response.data.upvoted);
				setDownvoted(response.data.downvoted);
			} catch (error) {
				if (error.response.status === 403) {
					window.location = '/logout';
				}
			}
		} else {
			history.push('/login?errmsg=' + 'You must be logged in to downvote ideas.');
		}
	};

	return (
		<div className="idea-card shadow">
			<div className="upvote-column">
				<button onClick={handleUpvote} style={{ color: upvoted === true ? '#4AABF5' : '' }}>
					+
				</button>
				<p style={{ color: upvoted === true || downvoted === true ? '#4AABF5' : '' }}>{rank}</p>
				<button onClick={handleDownvote} style={{ color: downvoted === true ? '#4AABF5' : '' }}>
					-
				</button>
			</div>
			<div className="idea-column">
				<h3 className="idea-title">{props.title}</h3>
				<p className="idea-description">{props.description}</p>
				<p className="author-and-date">
					Submitted by{' '}
					<span className="color-link" style={{ textTransform: 'capitalize' }}>
						{props.user}
					</span>{' '}
					on {props.date}
				</p>
			</div>
		</div>
	);
};

export default IdeaCard;
