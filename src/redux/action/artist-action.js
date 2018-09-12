import _ from 'lodash';
import { Artist } from '../../service';

export const FETCH_ARTIST_SUCCESS = 'FETCH_ARTIST_SUCCESS';
export const FETCH_ARTIST_FAILURE = 'FETCH_ARTIST_FAILURE';

export const fetchArtistSuccess = artists => ({
  type: FETCH_ARTIST_SUCCESS,
  artists
});

export const fetchArtistFailure = () => ({
  type: FETCH_ARTIST_FAILURE
});

export const fetchArtist = () => {
  return dispatch => {
    Artist.find().then(res => {
      if (!res) {
        dispatch(fetchArtistFailure());
      }
      dispatch(fetchArtistSuccess(_.get(res , 'data', [])));
    });
  };
};
