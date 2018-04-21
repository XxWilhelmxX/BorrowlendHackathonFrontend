import React from 'react';
import Transaction from './transaction'

const API ='http://c9b1a451.ngrok.io/server/user/bills';
const QUERY = '1';

export default class Manage extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            isReady:0,
            data: []
        };
    }
    
    componentDidMount(){
        fetch(API,
            {
                method: 'POST',
                dataType: 'json',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({user_id: QUERY})
            }
        )
        .then(response => response.json())
        .then(tab => this.setState({
                isReady: 1,
                data: tab
                }
            )
        );
    }

    render(){
        if(this.state.isReady === 0){
            return <div>loading...</div>;
        }else{
            return (
                <ul>
                  {this.state.data.map((datum) => {
                      return <li><Transaction name={datum.title} number={datum.id} /></li>
                    // return <span>
                    //     <li>{datum.title} {datum.id}</li>
                    //     <Details bill={datum.id}/>
                    // </span>
                  })}
                </ul>
              )
        }
    }
}
