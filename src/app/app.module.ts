import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankService } from './services/rank.service';

import { HeroesComponent } from './components/heroes/heroes.component';
import { RankComponent } from './components/heroes/rank.component';

import { FormsModule } from '@angular/forms';

import {APP_ROUTING} from "./app.routes";


@NgModule({
  declarations: [AppComponent, RankComponent , HeroesComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule , HttpModule , FormsModule , APP_ROUTING],
  providers: [
    StatusBar,
    RankService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
