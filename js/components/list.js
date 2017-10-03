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
                    value={this.state.title} 
                    onChange={event => this.setState({ title: event.target.value })} /> 
                </div>
                <div className="list">
                    <h3 className="color">{this.state.title}</h3> 
                    {cardCollection}
                    // We need to know if the card type is card to tell AddForm how to render the card when editing or toggling
                    <AddForm type="card" />
                </div>
            </div>
        );
    }
}

// This list should start out as blank
List.defaultProps = {
    title: ''
};


