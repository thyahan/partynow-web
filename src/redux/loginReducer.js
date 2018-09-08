import { INITIAL_LOGIN_DATA_RECEIVED, LOGOUT } from './loginAction';
import _ from 'lodash';
const initialState = {
  userInfo: {},
}
export default function loginReducer(state = initialState , action){
  switch (action.type) {
    case INITIAL_LOGIN_DATA_RECEIVED:
      const userInfo = _.get(action, 'users.0', false);
      if (!userInfo) return state;
      return _.assign({}, state, {userInfo});
    case LOGOUT:
      return _.assign({}, state, {
        userInfo: {},
      });
    default:
      return state;
  }
};
