import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SpotalysisApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SpotifyAuthPage } from '../pages/spotify-auth/spotify-auth';

import { SafePipe } from '../pipes/safe-pipe'

@NgModule({
  declarations: [
    SpotalysisApp,
    HomePage,
    SpotifyAuthPage,
    SafePipe
  ],
  imports: [
    IonicModule.forRoot(SpotalysisApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SpotalysisApp,
    HomePage,
    SpotifyAuthPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
