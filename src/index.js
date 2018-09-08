import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

/**
 * React router 4
 */
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

/**
 * Redux
 */
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const initialState = window.INITIAL_STATE;
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
