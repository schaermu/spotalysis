import { Component, Inject } from '@angular/core';
import { NavController, Platform, ToastController } from 'ionic-angular';

import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova';
import { OauthBrowser } from 'ng2-cordova-oauth/platform/browser'
import { Oauth } from 'ng2-cordova-oauth/oauth';
import { Spotify } from 'ng2-cordova-oauth/provider/spotify'

import { APP_CONFIG, IAppConfig } from './../../app/app-config';
import { LoggerService } from './../../providers/logger-service';
import { SpotifyService } from './../../providers/spotify-service';

import { HomePage } from '../home/home'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  provider: Spotify;
  auth: Oauth;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private platform: Platform,
    private logger: LoggerService,
    private spotifySvc: SpotifyService,
    @Inject(APP_CONFIG) private config: IAppConfig) {
    this.provider = new Spotify({
      clientId: this.config.clientId,
      responseType: 'token',
      appScope: [
        'playlist-read-private',
        'user-follow-read',
        'user-top-read'
      ],
      redirectUri: this.config.redirectUri,
      state: ''
    });
  }

  login() {
    if (this.platform.is('mobile')) {
      this.auth = new OauthCordova();
    } else {
      this.auth = new OauthBrowser();
    }

    this.auth.logInVia(this.provider, {})
      .then((res) => this.handleOauthSuccess(res))
      .catch((err) => this.handleOauthError(err));
  }

  handleOauthSuccess(response: any) {
    this.spotifySvc.saveAuthToken(response.access_token);
    this.navCtrl.popToRoot();
  }

  handleOauthError(err: any) {
    console.error(err);
    let toast = this.toastCtrl.create({
      message: 'Cancelled authentication using Spotify.',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
