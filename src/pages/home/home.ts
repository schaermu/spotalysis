import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { IAppState } from '../../app/app.state';
import { UserActions }from '../../actions/user.actions';

import { LoginPage } from '../login/login'
import { SpotifyService } from '../../providers/spotify-service';
import { LoggerService } from '../../providers/logger-service';
import { SpotifyUserProfile } from '../../models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user$: Observable<SpotifyUserProfile>

  constructor(
    public navCtrl: NavController,
    private spotifySvc: SpotifyService,
    private logger: LoggerService,
    private store: Store<IAppState>,
    private userActions: UserActions) {
      this.user$ = this.store.select(s => s.user.currentUser);
  }

  ionViewDidLoad() {
    if (!this.spotifySvc.isLoggedIn)
      this.navCtrl.push(LoginPage);
    else {
      this.spotifySvc.me()
        .catch((err) => this.navCtrl.push(LoginPage))
        .subscribe((me) => this.store.dispatch(this.userActions.setCurrent(me)));
    }
  }
}
