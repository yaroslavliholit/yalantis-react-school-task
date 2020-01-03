import { monthsStatistic, monthsListColor, monthsFormating } from '../helpers';

import {
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  LOAD_MONTHS,
  FILTER_USERS,
} from './actions';

export const initialState = {
  usersList: [],
  usersOriginal: [],
  months: [],
  activeMonths: false,
  loading: true,
  errorLoading: false,
};

export const reducer = (state, action) => {
  switch(action.type) {
    case LOAD_USER_SUCCESS :
      return {
        ...state,
        usersList: action.payload,
        usersOriginal: action.payload,
        loading: false,
      };
    case LOAD_USER_ERROR :
      return {
        ...state,
        usersList: [],
        usersOriginal: [],
        loading: false,
        errorLoading: true,
      };
    case LOAD_MONTHS :
      return {
        ...state,
        months: monthsListColor(monthsStatistic(action.payload))
      }
    case FILTER_USERS :
      let filterUserList;
      let active;

      if (action.payload) {
        active = action.payload;
        filterUserList = state.usersOriginal.filter(({ dob }) => monthsFormating(dob) === action.payload);
      } else {
        filterUserList = state.usersOriginal;
      }

      return {
        ...state,
        usersList: filterUserList,
        activeMonths: active,
      }
    default:
      return state;
  }
};
