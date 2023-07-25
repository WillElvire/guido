import { Action, createReducer, on } from '@ngrx/store';
import { intialState } from './user.state';
import { GetAuthUser, SetAuthUser } from './user.action';


export const initialState = intialState();


export const userAuthReducer = createReducer(
  initialState,
  on(SetAuthUser, (state, { user  })=> ({ ...state, user: user })),
  on(GetAuthUser, (state)=> ({ ...state})),
);
