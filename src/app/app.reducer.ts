import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';

import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';

import { userReducer } from '../reducers/user.reducer';
import { isDevMode } from '@angular/core';

const reducers = {
  user: userReducer
};

const developmentReducer = compose(storeFreeze, storeLogger(), combineReducers)(reducers);
const productionReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (!isDevMode()) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}
