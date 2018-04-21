import React, { Component } from 'react';
import './TopBar.css';

class Profile extends Component {
    render() {
        return (
          <div className="Profile">
            <div className="profile-picture" />

            <h2>Jeff Bridges</h2>

            <nav>
              <a href="">Settings</a>
              <a href="">Logout</a>
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