import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import preloadReducer from './preloadReducer';
import artist from './artist-reducer';

export default combineReducers({
    login: loginReducer,
    preload: preloadReducer,
    artist,
});