// js/components/list.js
import React from 'react';

import Card from './card';

export default class List extends React.Component{
	constructor(props) {
    super(props);
    }
        
    render(){
        const bigList = [];
        //for (let i=0; i<3; i++) {
            // bigList.push(<Card text= {i} />);
            // bigList.push(<Card text= "HEY" />);
            // bigList.push(<Card />);

       // }

        // const bigLister_1 = [];
        // const tasks = ["Buy Milk", "Do Dishes", "Make it to Bank"];
        // for (let i=0; i < tasks.length; i++) {
        //     bigLister_1[i] = tasks[i];
        //     console.log(bigLister_1);
        // }
        // bigLister_1;

        // const bigLister_2 = [];
        // const tasks = ["Buy Milk", "Do Dishes", "Make it to Bank", "Paint Barn"];
        // for (let i=0; i < tasks.length; i++) {
        //     bigLister_2.push(<Card text= {tasks[i]} />);
        //     console.log(bigLister_2);
        // }
        

         let tasks = ["Buy MilkyWays", "Do Dishes", "Make it to Bank", "Ask for Raise"];
         let biggestLister = tasks.map( item => <Card key={item} text={item} /> )


        return (
            <div className="listed">
                <h3 className="color">{this.props.title}</h3>
                <Card text = "Task" />
                <Card text = "Happy" />
                <Card text = "Something" /> 
                {biggestLister}
            </div>
        );
    }
}
