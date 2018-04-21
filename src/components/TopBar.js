import React, { Component } from 'react';
import './TopBar.css';
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom';

class Profile extends Component {
  render() {
        return (
          <div className="Profile">
            <div className="profile-picture" />

            <h2>Jeff Bridges</h2>

            <nav>
              <Link to="/" onClick={this.logout}>Logout</Link>
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