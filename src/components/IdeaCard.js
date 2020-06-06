import React from 'react';

const IdeaCard = () => {
	return (
		<div className="idea-card shadow">
			<div className="upvote-column">
				<button>+</button>
				<p>15</p>
				<button>-</button>
			</div>
			<div className="idea-column">
				<h3 className="idea-title">Go outside for some fresh air!</h3>
				<p className="idea-description">
					Social distancing doesn't mean your forced to stay at home. Go for a walk around the block! Ride
					your bike! Enjoy nature! But as you do so, remember to stay safe! This means consider wearing a
					mask, and make sure to remain at least 5m away from others at all times, avoid touching your face,
					and also wash your hands immediately after arriving home!
				</p>
				<p className="author-and-date">
					Submitted by <span className="color-link">Karamat</span> on 6/6/2020, 12:53:53 AM
				</p>
			</div>
		</div>
	);
};

export default IdeaCard;
