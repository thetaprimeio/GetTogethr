import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import InterestForm from './views/interestform/InterestForm';
import Dashboard from './views/dashboard/Dashboard';
import MainPage from './views/mainpage/MainPage'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={MainPage} />
      <Route exact path="/form" component={InterestForm} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
