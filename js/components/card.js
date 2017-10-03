import React from 'react';

export default function Card(props) {
	return (
		<div className="cards">
			{props.text}
		</div>
	); 
};

// This card should start out as blank
Card.defaultProps = {
	text: ''
};
