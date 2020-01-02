export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_ERROR = 'LOAD_USER_ERROR';
export const LOAD_MONTHS = 'LOAD_MONTHS';
export const FILTER_USERS = 'FILTER_USERS';

export const loadUsersSuccess = (data) => ({
  type: LOAD_USER_SUCCESS,
  payload: data,
});

export const loadUsersError = () => ({
  type: LOAD_USER_ERROR,
});

export const loadMonths = (data) => ({
  type: LOAD_MONTHS,
  payload: data,
});

export const filterUsers = (data) => ({
  type: FILTER_USERS,
  payload: data,
});
