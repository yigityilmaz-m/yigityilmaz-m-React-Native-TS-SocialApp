import axios from 'axios';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '..';
import {ACTIONS, UserAction, UserData} from '../types';

export const getUser = (): ThunkAction<void, RootState, null, UserAction> => {
  return async dispatch => {
    const url = `https://randomuser.me/api/?results=10`;
    try {
      let data: UserData = (await axios.get(url)).data;
      dispatch({
        type: ACTIONS.GET_USERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setLoading = (): UserAction => {
  return {
    type: ACTIONS.SET_LOADING,
  };
};
