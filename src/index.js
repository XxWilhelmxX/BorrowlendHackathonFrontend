import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import {Login} from './components/Login.js';
import {Register} from './components/Register.js';

ReactDOM.render(<Login/>, document.getElementById('root'));
