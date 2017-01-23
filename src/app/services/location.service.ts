/**
 * Created by Timo on 22.01.2017.
 */

import {Injectable, Inject} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL_LOCATIONS,BASE_URL_COMPANIES} from "../app.tokens";
import { Observable } from 'rxjs';
import { Company } from '../entities/company';
import {Location} from '../entities/location';
import {CompanyService} from './company.service'
import 'rxjs/Rx';

@Injectable()
export class LocationService {

  locationsArray: Array<Location> = [];
  companiesArray: Array<Company> = [];


  constructor(
    @Inject(BASE_URL_LOCATIONS) private baseUrl: string,
    @Inject(BASE_URL_COMPANIES) private baseUrlCompanies: string,
    private http: Http,
    private companyService: CompanyService) {

    this.companiesArray = this.companyService.companies;
  }

  public findById(id: string): Observable<Location> {

    let url = this.baseUrl;

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
      .http
      .get(url, { headers, search })
      .map(resp => resp.json());

  }

  private fillCompaniesArray():void{
    this.companyService.findAll();
    this.companiesArray = this.companyService.companies;
  }


  public findAll():void {
    let url = this.baseUrl;
    //let urlCompanies = this.baseUrlCompanies
    let headers = new Headers();
    headers.set('Accept', 'application/json');
    console.log("GETTING STUFF");
    //fill companies array
    this.fillCompaniesArray();

    this
      .http
      .get(url, {headers})
      .map(resp => resp.json())
      .subscribe(
        (locations) => {
          this.locationsArray = locations["_embedded"]["locations"];
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );


  }




}
