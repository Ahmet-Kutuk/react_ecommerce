import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import CategoryComponent from './componets/Category';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {ContextProvider} from './Context';


ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/category" component={CategoryComponent} />
    </Switch>
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
