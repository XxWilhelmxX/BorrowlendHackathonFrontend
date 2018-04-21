import React from 'react';

const API ='https://jsonplaceholder.typicode.com/posts/';
const QUERY = '1';

export default class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            isReady:0,
            data: {
                title: ''
            }
        };
    }
    
    componentDidMount() {
        fetch(API + QUERY)
            .then(response => response.json())
            .then(obj => this.setState({
                isReady:1,
                data: obj
            }));
    }
    render(){
        if(this.state.isReady === 0){
            return <div>loading...</div>;
        }else{
            return <div>{this.state.data.title}</div>;
        }
    }
}
