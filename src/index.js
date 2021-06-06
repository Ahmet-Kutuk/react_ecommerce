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
import ContactCompoment from './componets/Contact';
import CartCompoment from './componets/Cart';
import FavoriteCompoment from './componets/Favorite';
ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/category" component={CategoryComponent} />
      <Route path="/cart" component={CartCompoment} />
      <Route path="/favorite" component={FavoriteCompoment} />
      <Route path="/woman" component={WomanCompoment} />
      <Route path="/man" component={ManCompoment} />
      <Route path="/contact" component={ContactCompoment} />
    </Switch>
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
