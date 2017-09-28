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
  for (let i=0; i < props.links.length; i++) {
  	footer_links.push(
  		<li className="topNav" key={i.toString()}>
  			<a href={props.links[i].href} target="_blank">
  				{props.links[i].text}
  			</a>
  		</li>
  	)
  	console.log(footer_links);
  };

	return (
		<div className="navbar_styling">
			<div className="logo">
				<h1 title="its just an html title attribute"> {props.title}</h1>
				<h3 className="subtext" title="Old Way to include title attributes into elements">
					<a href="https://facebook.github.io/react/docs/dom-elements.html">Discover the world of Elements</a></h3>
			</div>
	    <nav className="all_links">
	    	<ul className="right_side">
	    		{all_links}
	    	</ul>

	    </nav>
	  </div>
	); 
}



