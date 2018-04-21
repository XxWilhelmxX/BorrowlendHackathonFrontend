import React, { Component } from 'react';
import './TopBar.css';
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom';

class Profile extends Component {
  logout() {
    Cookies.set('logged', '');
    window.location.href = "/";
  }

  render() {
        return (
          <div className="Profile">
            <div className="profile-picture" />

            <h2>{Cookies.get('logged')}</h2>

            <nav>
              <a href='#' onClick={this.logout}>Logout</a>
            </nav>
          </div>
        );
    }
}

class TopBar extends Component {
  render() {
    return (
      <header className="TopBar">
        <h1>Borrowlend</h1>

        <Profile />
      </header>
    );
  }
}

export default TopBar;
