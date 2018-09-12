import _ from 'lodash';
import { FIND_BRAND_RECEIVED } from '../action/brand-action';

const initialState = {
  brands: []
};

export default function(state = initialState , action) {
  switch (action.type) {
    case FIND_BRAND_RECEIVED:
      const brands = _.get(action, 'brands', []);
      return _.assign({}, state, { brands});
    default:
      return state;
  }
};
