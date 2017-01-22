/**
 * Created by Timo on 21.01.2017.
 */
import {Injectable, Inject} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL_COMPANIES} from "../app.tokens";
import { Company } from '../entities/company';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyService {

  companies: Array<Company> = [];

  constructor(
    @Inject(BASE_URL_COMPANIES) private baseUrl: string,
    private http: Http ) {

  }

  public findAll():void {
    console.log("FINDALL CALL  GOING TO URL: "+this.baseUrl+"/list");
    let url = this.baseUrl;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    this
      .http
      .get(url+"/list", headers)
      .map(resp => resp.json())
      .subscribe(
        (companies) => {
          this.companies = companies;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        });
  }











}
