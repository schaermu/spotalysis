import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login'
import { SpotifyService } from './../../providers/spotify-service';
import { LoggerService } from './../../providers/logger-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private spotifySvc: SpotifyService,
    private logger: LoggerService) {}

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
    if (!this.spotifySvc.isLoggedIn)
      this.navCtrl.push(LoginPage);
    else {
      this.spotifySvc.me().subscribe((me) => console.log(me));
    }
  }
}
