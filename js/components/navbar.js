import React from 'react';

export default function NavigationBar(props) {
	const all_links = props.links.map((link, index) => (
		<li className="topNav" key={index}>
			<a href={link.href} target="_blank">
				{link.text}
			</a>
		</li>
	));	

	return (
		<div className="navbar_styling">
			<div className="logo">
				<h1>{props.title}</h1>
			</div>
	    <nav className="all_links">
	    	<ul className="right_side">
	    		{all_links}
	    	</ul>
	    </nav>
	  </div>
	); 
}



