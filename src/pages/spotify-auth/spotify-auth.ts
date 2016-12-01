import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-spotify-auth',
  templateUrl: 'spotify-auth.html'
})
export class SpotifyAuthPage {
  clientId: string = ''
  clientSecret: string = ''

  authBaseUrl: string = 'https://accounts.spotify.com/authorize'
  redirect_uri: string = 'http://localhost:8100/'
  authorizeUrl: string = ''

  constructor(public navCtrl: NavController, private platform: Platform) {
    this.clientId = '0772c22af0e3401c8f23aa918e77988a';
    this.clientSecret = '0e69248f0a0a46c5abfaac74eb6d5ff6';
  }

  ionViewDidLoad() {
    this.authorizeUrl = `${this.authBaseUrl}?client_id=${this.clientId}&scope=user-read-private user-read-email&response_type=code&redirect_uri=${this.redirect_uri}`;
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        let browser = new InAppBrowser(this.authorizeUrl, '_blank');
        browser.on('loadstart').subscribe((data) => {
          console.log(data);
        });
      } else {
        
      }
    });
  }
}
