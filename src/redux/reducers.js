import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import preloadReducer from './preloadReducer';

export default combineReducers({
    login: loginReducer,
    preload: preloadReducer,
});