import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SpotifyAuthPage } from '../spotify-auth/spotify-auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  authorizeWithSpotify() {
    this.navCtrl.push(SpotifyAuthPage);
  }

}
