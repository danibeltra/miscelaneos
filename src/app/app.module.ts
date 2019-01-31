import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Pagina2Page } from '../pages/pagina2/pagina2';
import { IntroduccionPage } from '../pages/introduccion/introduccion';

//Plugins
import { IonicStorageModule } from '@ionic/storage';

//Servicios
import {  AjustesService } from '../providers/ajustes/ajustes';


@NgModule({
  declarations: [
    MyApp,
    Pagina2Page,
    IntroduccionPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pagina2Page,
    IntroduccionPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AjustesService
  ]
})
export class AppModule {}
