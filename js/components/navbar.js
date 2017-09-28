import React from 'react';

export default function NavigationBar(props) {
	// the MAPPING METHOD APPROACH
	const all_links = props.links.map((link, index) => (
		<li className="topNav" key={index}>
			<a href={link.href} target="_blank">
				{link.text}
			</a>
		</li>
	));

	// the FOR LOOP APPROACH
	const footer_links = [];
	const numbers = footer_links.index;
  for (let i=0; i < props.links.length; i++) {
  	footer_links.push(
  		<li className="topNav" key={i.toString()}>
  			<a href={props.links[i].href} target="_blank">
  				{props.links[i].text}
  			</a>
  		</li>
  	)
  };

	return (
		<div className="navbar_styling">
			<div className="logo">
				<h1>{props.title}</h1>
			</div>
	    <nav className="all_links">
	    	<ul className="right_side">
	    		{footer_links}
	    	</ul>
	    </nav>
	  </div>
	); 
}



