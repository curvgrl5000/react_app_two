// js/components/list.js
import React from 'react';
import Card from './card';

export default class List extends React.Component{
	render(){
        const bigList = [];
        for (let i=0; i<4; i++) {
            bigList.push(<Card />);
        }
        return (
            <div className="listed">
                {bigList}
            </div>
        );
    }
}