export enum ACTIONS {
  GET_USERS = 'GET_USERS',
  SET_LOADING = 'SET_LOADING',
  //   SET_ERROR = 'SET_ERROR',
  //   SET_ALERT = 'SET_ALERT',
}

export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
}

export interface UserData {
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
  results: User[];
}

export interface UserState {
  data: UserData | null;
  loading: boolean;
}

export interface GetUserAction {
  type: typeof ACTIONS.GET_USERS;
  payload: UserData;
}
export interface SetLoadingAction {
  type: typeof ACTIONS.SET_LOADING;
}

export type UserAction = GetUserAction | SetLoadingAction;


