import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import CategoryComponent from './componets/Category';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {ContextProvider} from './Context';
import WomanCompoment from './componets/Woman';
import ManCompoment from './componets/Man';

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/category" component={CategoryComponent} />
      <Route path="/woman" component={WomanCompoment} />
      <Route path="/man" component={ManCompoment} />
    </Switch>
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
