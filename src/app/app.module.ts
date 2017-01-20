import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CompanySearchModule} from "./company/company.module";
import {HomeComponent} from "./home/home.component";
import {AppRouterModule} from "./app.routes";
import {LocationSearchModule} from "./location/location.module";

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CompanySearchModule,
    LocationSearchModule,
    AppRouterModule
  ],

  declarations: [
    AppComponent,
    HomeComponent
  ],

  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
