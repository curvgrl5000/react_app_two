// js/components/board.js
import React from 'react';
import Card from './card';
import List from './list';
import NavigationBar from './navbar';


export default class Board extends React.Component{
	render(){
        
        let titles = ["Nice to Have!", "Add to WishList", "Your Dreaming"];
        let listed = titles.map( item => <List key={item} tinyTitle={item} /> );

        const linky = [{ 
              text: 'Favorite Blogs',
              href: 'https://www.washingtonpost.com/?reload=true'
            }, {
              text: 'Great Songwriters',
              href: 'http://www.rollingstone.com/music/artists/the-jam/biography'
            }, {
              text: 'A Favorite Place',
              href: 'https://www.lonelyplanet.com/germany/berlin'
            }];

        return (
            <div>
                <NavigationBar title="THINGS TO DO" links={linky} />
                <div className="column">
                    <List tinyTitle="Required"/>
                    {listed}
                </div>
            </div>
        );
    }
}