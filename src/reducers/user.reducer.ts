import '@ngrx/core/add/operator/select'
import 'rxjs/add/operator/map'

import { ActionReducer, Action } from '@ngrx/store';

import { UserActions } from '../actions/user.actions';
import { initialUserState, IUserState } from '../app/app.state';

export const userReducer: ActionReducer<IUserState> = (state = initialUserState, action: Action) => {
  switch (action.type) {
    case UserActions.SET_CURRENT:
      return Object.assign({}, state, {
        currentUser: action.payload
      });
    case UserActions.UNSET_CURRENT:
      return null;

    default:
      return state;
  }
}
