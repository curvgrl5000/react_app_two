// js/components/board.js
import React from 'react';

import Card from './card';
import List from './list';

export default class Board extends React.Component{
	render(){
        
         let titles = ["Nice to Have", "Add to WishList", "Your Dreaming"];
         let listed = titles.map( item => <List key={item} tinyTitle={item} /> );

        return (
            <div className="column">
                <List tinyTitle="Required"/>
                {listed}
            </div>
        );
    }
}