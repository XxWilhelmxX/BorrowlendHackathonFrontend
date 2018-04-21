import React from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            toDisplay :[{
                name: 'home',
                displayText: 'Home',
                command: '',
            },
            {
                name: 'friends',
                displayText: 'Friends',
                command: 'fiends'
            },
            {
                name: 'manage',
                displayText: 'Manage Debts',
                command: 'mangle'
            },
            {
                name: 'borrow',
                displayText: 'Borrow/Lend',
                command: 'burrow'
            },
            {
                name: 'split',
                displayText: 'Split',
                command: 'splat'
            }
            ]
        };
    }

    updateView(command){
        console.log(command);
    }

    render() {
        return (
          <ul className='sideList'>
            {this.state.toDisplay.map((listValue) => {
              return <li><Link to={listValue.command}>{listValue.displayText}</Link></li>;
            })}
          </ul>
        )
      }
  
}
