import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CompanyModule} from "./company/company.module";
import {HomeComponent} from "./home/home.component";
import {AppRouterModule} from "./app.routes";
import {LocationModule} from "./location/location.module";
import {BASE_URL_COMPANIES, BASE_URL_LOCATIONS} from './app.tokens';


const BASE_URL_COMPANIES_PRODUCTION = "http://localhost:8080/companies";
const BASE_URL_LOCATIONS_PRODUCTION = "http://localhost:8080/locations";

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CompanyModule,
    LocationModule,
    AppRouterModule
  ],

  declarations: [
    AppComponent,
    HomeComponent,
  ],

  providers: [
    { provide: BASE_URL_COMPANIES, useValue: BASE_URL_COMPANIES_PRODUCTION},
    { provide: BASE_URL_LOCATIONS, useValue: BASE_URL_LOCATIONS_PRODUCTION}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
