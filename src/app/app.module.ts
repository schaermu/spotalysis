import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { Logger } from 'angular2-logger/core';
import { LoggerService } from './../providers/logger-service';

import { APP_CONFIG, AppConfig } from './../app/app-config';
import { SpotifyService } from './../providers/spotify-service'

import { SpotalysisApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { SafePipe } from '../pipes/safe-pipe'

@NgModule({
  declarations: [
    SpotalysisApp,
    HomePage,
    LoginPage,
    SafePipe
  ],
  imports: [
    IonicModule.forRoot(SpotalysisApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SpotalysisApp,
    HomePage,
    LoginPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: APP_CONFIG, useValue: AppConfig },
    SpotifyService,
    LoggerService,
    Logger
  ]
})
export class AppModule { }
