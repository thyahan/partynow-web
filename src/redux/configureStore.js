import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

const loggerMiddleware = createLogger();
let middleware = [thunkMiddleware];
if(process.env.NODE_ENV !== 'production') middleware.push(loggerMiddleware);

export default function configureStore(preloadState){
  return createStore(reducers, preloadState, applyMiddleware(...middleware));
};
