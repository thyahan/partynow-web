import users from './mockupUser';

export const INITIAL_LOGIN_DATA_RECEIVED = 'INITIAL_LOGIN_DATA_RECEIVED';
export const LOGOUT = 'LOGOUT';

export const initialLoginData = () => ({
  type: INITIAL_LOGIN_DATA_RECEIVED,
  users
});

export const logout = () => ({
  type: LOGOUT,
});
