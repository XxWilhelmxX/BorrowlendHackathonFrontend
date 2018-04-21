import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

const API ='http://c9b1a451.ngrok.io/server/user/register';

export default class Register extends React.Component {
  register() {
    let name = document.querySelectorAll('input[name="name"]')[0].value;
    let surname = document.querySelectorAll('input[name="surname"]')[0].value;
    let login = document.querySelectorAll('input[name="login"]')[0].value;
    let password = document.querySelectorAll('input[name="password"]')[0].value;
    let repeat_password = document.querySelectorAll('input[name="passwordRepeat"]')[0].value;
    let email = document.querySelectorAll('input[name="email"]')[0].value;

    if(name.length > 0 && surname.length > 0 && login.length > 0
      && password.length > 0 && repeat_password.length > 0 && email.length > 0){

          fetch(API,
            {
                method: 'POST',
                dataType: 'json',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({login: login, password: password, email: email, name: name, surname: surname})
            }
      )
            .then(response => {
              response.json().then(data => {
                if(!data.err){
                  alert('Registration completed succesfully!');
                }else{
                  alert('There was an error with register! Try again later!');
                }
              });
            });

    }else{
      alert('Please fill all fields!');
    }
  }

  render() {
    return(
      <div>
        <header><h1>BORROWLEND</h1></header>
        <div className="loginForm">
        <h2>Create your Borrowlend account!</h2>
        <form>
        <ul className="wrapper">
          <li className="form-row">
            <label for="name">Name:</label>
            <input type="text" name="name"/>
          </li>
          <li className="form-row">
            <label for="name">Surname:</label>
            <input type="text" name="surname"/>
          </li>

          <li className="form-row">
            <label for="name">Login:</label>
            <input type="text" name="login"/>
          </li>
          <li className="form-row">
            <label for="password">Password:</label>
            <input type="password" name="password"/>
          </li>
          <li className="form-row">
            <label for="passwordRepeat">Password repeat:</label>
            <input type="password" name="passwordRepeat"/>
          </li>
          <li className="form-row">
            <label for="email">Email:</label>
            <input type="text" name="email"/>
          </li>
          <li className="form-row">
            <input type="button" value="Register" name="buttonRegister" onClick={this.register}/>
          </li>
        </ul>
          <a href="#">Have account yet?</a>
        </form>
        </div>
      </div>
    );
  }
}
