import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import TopBar from './TopBar';
import Sidebar from './sidebar';
import Home from './home';
import Login from './Login';
import Register from './Register';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <TopBar />
                    <Sidebar />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={TopBar} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </div>
            </Router>
        );
    }
}

export default App;