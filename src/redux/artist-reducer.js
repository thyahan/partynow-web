import _ from 'lodash';
import { FETCH_ARTIST_FAILURE, FETCH_ARTIST_SUCCESS } from './artist-action';

const initialState = {
  artists: [],
  status: false
};

export default function artistReducer (state = initialState , action) {
  switch (action.type) {
    case FETCH_ARTIST_SUCCESS:
      return _.assign({}, state, { artists: _.get(action, 'artists', [])});
    case FETCH_ARTIST_FAILURE:
      return _.assign({}, state, { status: false });
    default:
      return state;
  }
};
