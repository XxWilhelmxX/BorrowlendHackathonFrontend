import React from 'react';

const API ='http://c9b1a451.ngrok.io/server/bills/';

export default class Details extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            isReady:0,
            data: [],
            renderFull:0
        };
    }
    
    componentDidMount(){
        let billID = this.props.number;
        fetch(API,
            {
                method: 'POST',
                dataType: 'json',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({bill_id: billID})
            }
        )
        .then(response => response.json())
        .then(tab => this.setState({
                isReady: 1,
                data: tab
        }));
    }

    expandHandler(){
        if (this.state.renderFull===0)
            this.setState({renderFull: 1});
        else
            this.setState({renderFull: 0});
    }

    render(){
        if(this.state.isReady === 0){
            return <div>loading...</div>;
        }else if(this.state.renderFull === 0){
            return (
                <div onClick={this.expandHandler.bind(this)}>
                    {this.state.data.bill.title} {this.state.data.users.map(user => user.login)}
                </div>
              )
            } else {
                return (
                <div onClick={this.expandHandler.bind(this)}>
                    Title: {this.state.data.bill.title}
                    Id: {this.state.data.bill.id} <br/>
                    Participants: {this.state.data.users.map(user => user.login)}
                </div>
              )
        }
    }
}
