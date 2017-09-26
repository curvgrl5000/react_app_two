// js/components/list.js
import React from 'react';
import Card from './card';
import AddForm from './add-form';

export default class List extends React.Component{
	constructor(props) {      
    super(props)

        this.state = { title: 'Placeholder' };
        
    }
        
    render(){
         let tasks = ["Buy MilkyWays", "Do Dishes", "Make it to Bank", "Ask for Raise!"];
         let biggestLister = tasks.map( item => <Card key={item} text={item} /> )

        return (
            <div className="listed">
                <div>
                    <input
                    value={this.state.title} 
                    onChange={event => this.setState({ title: event.target.value })} /> 
                </div>
                <div className="listed">
                    <h3 className="color">{this.state.title}</h3>
                    <h5 className="color">{this.props.tinyTitle}</h5>
                    <Card text = "Taskier" />
                    <Card text = "Happier" />
                    <Card text = "Something" /> 
                    {biggestLister}
                </div>
            </div>
        );
    }
}

