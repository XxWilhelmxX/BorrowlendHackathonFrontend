import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';

const API ='http://c9b1a451.ngrok.io/server/bills/add';

export default class Login extends React.Component {
  add() {
    let title = document.querySelectorAll('input[name="title"]')[0].value;
    let amount = document.querySelectorAll('input[name="amount"]')[0].value;

    if(title.length > 0 && amount.length > 0){

       fetch(API,
         {
             method: 'POST',
             dataType: 'json',
             headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({title: title, amount: amount, id: Cookies.get('logged')})
         }
   )
         .then(response => {
            console.log(response);
            
           response.json().then(data => {
            console.log(data);
           });
         });

    }else{
      alert('Please fill all fields!');
    }
  }

  render() {
    return(
      <div>
        <h1>My personal account</h1>
        <form>
            <label for="title">tytuł:</label>
            <input type="text" name="title"/>

            <label for="amount">tytuł:</label>
            <input type="number" step="0.01" name="amount"/>
            
            <input type="button" value="Add" onClick={this.add}/>
        </form>
      </div>
    );
  }
}