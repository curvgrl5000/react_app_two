// js/components/board.js
import React from 'react';

import Card from './card';
import List from './list';

export default class Board extends React.Component{
	render(){
        // const lists = [];
        // for (let i=0; i<2; i++) {
        //     lists.push(<List title= "X" />);
        // }

        let titles = ["List A", "List B", "List C"];
        let listed = titles.map( item => <List key={item} title={item} /> );


        return (
            <div className="column">
                <List title="One Title" />
                {listed}
            </div>
        );
    }
}