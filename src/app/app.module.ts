import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SpotalysisApp } from './app.component';
import { Home } from '../pages/home/home';

@NgModule({
  declarations: [
    SpotalysisApp,
    Home
  ],
  imports: [
    IonicModule.forRoot(SpotalysisApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SpotalysisApp,
    Home
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
