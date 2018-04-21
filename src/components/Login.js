import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

export default class Login extends React.Component {
  login() {
    let login = document.querySelectorAll('input[name="login"]')[0].value;
    let password = document.querySelectorAll('input[name="password"]')[0].value;

    if(login.length > 0 && password.length > 0){
      alert(`LOGIN: ${login}, PASSWORD: ${password}`);
      //send request to check if user exists

    }else{
      alert('Please fill all fields!');
    }
  }

  render() {
    return(
      <div>
        <header><h1>BORROWLEND</h1></header>
        <div className="loginForm">
        <h2>Login to Borrowlend!</h2>
        <form>
          <ul className="wrapper">
            <li className="form-row">
              <label for="login">Login:</label>
              <input type="text" name="login"/>
            </li>
            <li className="form-row">
              <label for="password">Password:</label>
              <input type="text" name="password"/>
            </li>
            <li className="form-row">
              <label for="remember"><input type="checkbox" name="remember"/>Remember me</label>
            </li>
            <li className="form-row">
              <input type="button" value="Login" name="buttonLogin" onClick={this.login}/>
            </li>
          </ul>
          <a href="#">Do not have account?</a>
        </form>
        </div>
      </div>
    );
  }
}
