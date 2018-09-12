import _ from 'lodash';
import service from '../../service';

export const FIND_BRAND = 'FIND_BRAND';
export const CREATE_BRAND = 'CREATE_BRAND';
export const PATCH_BRAND = 'PATCH_BRAND';
export const FIND_BRAND_RECEIVED = 'FIND_BRAND_RECEIVED';
export const CREATE_BRAND_SUCCESS = 'CREATE_BRAND_SUCCESS';
export const PATCH_BRAND_SUCCESS = 'PATCH_BRAND_SUCCESS';
export const FIND_BRAND_FAILURE = 'FIND_BRAND_FAILURE';

export const findBrandFailure = () => ({
  type: FIND_BRAND_FAILURE
});

export const findBrandReceived = brands => ({
  type: FIND_BRAND_RECEIVED,
  brands,
});

export const findBrand = () => {
  return dispatch => {
    service.brand.find().then(response => {
      if (!response) {
        dispatch(findBrandFailure());
      } else {
        const brand = _.get(response, 'data', []);
        dispatch(findBrandReceived(brand));
      }
    });
  };
};
