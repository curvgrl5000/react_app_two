// js/components/board.js
import React from 'react';
import List from './list';
import AddForm from './add-form';
import NavigationBar from './navbar';


export default class Board extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        lists: [{
          title: 'Nice to Have!'
        }, {
          title: 'Add to WishList'
        }]
      };
  }

	render(){
        const listed = this.state.lists.map((list, index)  => 
          <List key={index}  {...list} />
        );

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
                <div className="lists">
                  <List tinyTitle="Required"/>
                  {listed}
                </div>
              </div>
            </div>
        );
    }
}

// This list should start out as blank
Board.defaultProps = {
    title: 'Board'
};


