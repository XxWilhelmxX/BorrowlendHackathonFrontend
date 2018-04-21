import React from 'react';
import './home.css';

const API ='http://c9b1a451.ngrok.io/server/user/basic';
const QUERY = '1';

export default class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            isReady:0,
            data: {
                debt: '',
                deficit: ''
            }
        };
    }
    
    componentDidMount() {
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
        .then(obj => this.setState({
                isReady: 1,
                data: obj
                }
            )
        );
        // console.log(this.state);
    }
    render(){
        if(this.state.isReady === 0){
            return <div>loading...</div>;
        }else{
            return (
                <div className="home">
                    <div className="minus"><span>You owe in total:</span> {this.state.data.debt}</div>
                    <div className="plus"><span>Your friends owe you in total:</span> {this.state.data.deficit}</div>
                </div>
            );
        }
    }
}
