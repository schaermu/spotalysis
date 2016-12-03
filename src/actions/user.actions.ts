import { Injectable } from '@angular/core';

import { ActionCreatorFactory } from '../shared/util';
import { SpotifyUserProfile } from '../models'

@Injectable()
export class UserActions {
  static SET_CURRENT = '[User] SET_CURRENT';
  static UNSET_CURRENT = '[User] UNSET_CURRENT';

  setCurrent = ActionCreatorFactory.create<SpotifyUserProfile>(UserActions.SET_CURRENT);
  unsetCurrent = ActionCreatorFactory.create<void>(UserActions.UNSET_CURRENT);
}
