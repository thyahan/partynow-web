import _ from 'lodash';
export default function preloadReducer(state = {} , action){
  switch (action.type) {
    case 'UPDATE_VALUE':
      const value = _.get(action, 'value', false);
      if (!value) return state;
      return _.assign({}, state, {value});
    default:
      return state;
  }};
