import { combineReducers } from 'redux';
import { login, preload, artist, brand } from './reducer';

export default combineReducers({ login, preload, artist, brand});
