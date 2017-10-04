// js/components/list.js
import React from 'react';
import Card from './card';
import AddForm from './add-form';

export default class List extends React.Component{
	constructor(props) {      
        super(props);
        this.state = { 
            // An array with three objects to be used to map over to the cardCollection
            cards: [{
                text: 'Example Card 1'
            }, { 
                text: 'Example Card 2' 
            }, {
                text: 'Example Card 3' 
            }]
        }
    }
        
    render() {
         // review spread operator on MDM
         const cardCollection = this.state.cards.map((card, index) =>    
            <Card key={index} {...card} />  // we're passing all the keys from the object
         );
        return (
            <div className="list">
                <div>
                    <input 
                    type="text"
                    value={this.state.title}
                    placeholder="Name Your List"
                    onChange={event => this.setState({ title: event.target.value })} /> 
                </div>
                <h3 className="color" defaultValue="Placeholder">{this.state.title}</h3> 
                {cardCollection}
                <AddForm type="card" />
            </div>
        );
    }
}

// This list should start out as blank
List.defaultProps = {
    title: ''
};


