import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TrucoPage}from '../pages/truco/truco';
import {RankingPage}from '../pages/ranking/ranking';
import {ModalPage}from '../pages/modal/modal';
import {CrearTrucoPage}from '../pages/crear-truco/crear-truco'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TrucoPage,
    RankingPage,
    ModalPage,
    CrearTrucoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TrucoPage,
    RankingPage,
    ModalPage,
    CrearTrucoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
