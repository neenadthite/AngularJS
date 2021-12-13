import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { HeaderComponent } from './header/header.component';
import { Route12Component } from './route1/route12/route12.component';
import { Route21Component } from './route2/route21/route21.component';
import { Route11Component } from './route1/route11/route11.component';
import { Route22Component } from './route2/route22/route22.component';

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route2Component,
    HeaderComponent,
    Route12Component,
    Route21Component,
    Route11Component,
    Route22Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
