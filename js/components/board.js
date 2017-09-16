// js/components/board.js
import React from 'react';
import Card from './card';
import List from './list';

export default class Board extends React.Component{
	render(){
        const lists = [];
        for (let i=0; i<1; i++) {
            lists.push(<List />);
        }
        return (
            <div className="column">
                {lists}
            </div>
        );
    }
}