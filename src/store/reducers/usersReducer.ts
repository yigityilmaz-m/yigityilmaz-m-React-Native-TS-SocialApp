import {ACTIONS, UserAction, UserState} from '../types';

const initialState: UserState = {
  data: null,
  loading: false,
};

export default (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case ACTIONS.GET_USERS:
      return {...state, data: action.payload, loading: false};
    case ACTIONS.SET_LOADING:
      return {...state, loading: true};
    default:
      return state;
  }
};
