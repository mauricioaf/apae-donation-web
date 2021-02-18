import './assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/Login';
import Template from './components/Template';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/home" component={Template} />
        </Switch>
    </ BrowserRouter>
  </React.StrictMode>
  , document.getElementById('root')
);
