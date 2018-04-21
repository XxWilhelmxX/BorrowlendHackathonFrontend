import React from 'react';

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
            return <div>You owe: {this.state.data.debt} in total<br/>
            Your friends owe you: {this.state.data.deficit} in total</div>;
        }
    }
}
