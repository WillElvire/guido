import { createAction, props } from '@ngrx/store';
import { UserDto } from 'src/app/core/interfaces/dto';

export const login = createAction(
  '[Login User] Login',
  props<{ username: string; password: string }>()
);


export const SetAuthUser = createAction(
  '[Auth User] Authentifation',
  props<{ user : UserDto }>()
);


export const GetAuthUser = createAction(
  '[Get User] Authentifation',
)
