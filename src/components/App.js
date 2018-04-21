import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import TopBar from './TopBar';
import Sidebar from './sidebar';
import Home from './home';
import Manage from './manage';
import Login from './Login';
import Register from './Register';
import Cookies from 'js-cookie'
import Borrow from './borrow'

class App extends Component {
    constructor() {
        super();
        console.log('App', Cookies.get('logged'));
        this.state = {
            isLogged: Cookies.get('logged') ? true : false
        }
    }

    render() {
        return (
            <Router>
                {
                this.state.isLogged ? <div className="container">
                    <TopBar />
                    <div className="main">
                        <Sidebar />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/mangle" component={Manage} />
                        <Route path="/register" component={Register} />
                        <Route path="/borrow" component={Borrow} />
                    </div>
                </div> :
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Redirect from='/' to="/login" />
                </Switch>
                }
            </Router>
        );
    }
}

export default App;