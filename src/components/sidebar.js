import React from 'react';


export default class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            toDisplay :[{
                name: 'home',
                displayText: 'Home',
                command: 'bone',
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
          <ul>
            {this.state.toDisplay.map((listValue) => {
              return <li onClick={() => this.updateView(listValue.command)}>{listValue.displayText}</li>;
            })}
          </ul>
        )
      }
  
}