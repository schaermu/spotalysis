import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { APP_CONFIG, AppConfig } from './../app/app-config';

import { SpotalysisApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { SafePipe } from '../pipes/safe-pipe'

@NgModule({
  declarations: [
    SpotalysisApp,
    HomePage,
    SafePipe
  ],
  imports: [
    IonicModule.forRoot(SpotalysisApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SpotalysisApp,
    HomePage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: APP_CONFIG, useValue: AppConfig }
  ]
})
export class AppModule { }
