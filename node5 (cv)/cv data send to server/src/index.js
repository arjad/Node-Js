import React from 'react';
import ReactDOM from 'react-dom';
import App from './Form';
import {BrowserRouter as Router,Route} from 'react-router-dom'


ReactDOM.render(
    <Router>
        <App />
    </Router>
,  document.getElementById('root')
);

