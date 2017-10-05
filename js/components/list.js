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
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        const currentValue = this.inputText.value.trim() || "Please Add Something!";
        alert('The new name of this List: ' + currentValue);
        console.log(currentValue);
        this.inputText.value = '';
    }

    update(){
        this.setState({
            foo: this.inputText.value,
        });
    }

    render() {
         // review spread operator on MDM
         const cardCollection = this.state.cards.map((card, index) =>    
            <Card key={index} {...card} />  // we're passing all the keys from the object
         );
        return (
            <div className="list">
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input placeholder="Name of List" type="text" 
                            ref={ (input) => this.inputText = input }
                             onChange={this.update.bind(this)} 
                            />
                        </label>
                        <button
                          onClick={this.handleSubmit.bind(this)}
                        >Add</button>
                    </form> 
                </div>
                <h3 className="color">{this.state.foo}</h3>
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


