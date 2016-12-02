import { Component, Inject } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova';
import { OauthBrowser } from 'ng2-cordova-oauth/platform/browser'
import { Oauth } from 'ng2-cordova-oauth/oauth';
import { Spotify } from 'ng2-cordova-oauth/provider/spotify'

import { APP_CONFIG, IAppConfig } from './../../app/app-config';
import { LoggerService } from './../../providers/logger-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  provider: Spotify;
  auth: Oauth;

  constructor(
    public navCtrl: NavController,
    private logger: LoggerService,
    private platform: Platform,
    @Inject(APP_CONFIG) private config: IAppConfig) {
    this.provider = new Spotify({
      clientId: this.config.clientId,
      appScope: [
        'playlist-read-private',
        'user-follow-read',
        'user-top-read'
      ],
      redirectUri: 'http://localhost:8100/',
      state: ''
    });
  }

  authorizeWithSpotify() {
    if (this.platform.is('mobile')) {
      this.auth = new OauthCordova();
    } else {
      this.auth = new OauthBrowser();
    }

    this.auth.logInVia(this.provider, {})
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

}
