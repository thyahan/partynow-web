import { combineReducers } from 'redux';
import { login, preload, artist } from './reducer';

export default combineReducers({ login, preload, artist});
