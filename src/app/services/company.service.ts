/**
 * Created by Timo on 21.01.2017.
 */
import {Injectable, Inject} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL_COMPANIES} from "../app.tokens";
import { Company } from '../entities/company';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class CompanyService {

  companies: Array<Company> = [];

  constructor(
    @Inject(BASE_URL_COMPANIES) private baseUrl: string,
    private http: Http ) {

  }

  public findById(id: string): Observable<Company> {

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

  public findAll():void {
    let url = this.baseUrl;

    let headers = new Headers();
    headers.set('Accept', 'application/json');


    this
        .http
        .get(url, {headers})
        .map(resp => resp.json())
        .subscribe(
            (companies) => {
              this.companies = companies["_embedded"]["companies"];
            },
            (err) => {
              console.error('Fehler beim Laden', err);
            }
        );
  }

  public find(searchCompany: string): void {

    let url = this.baseUrl;

    /*let search = new URLSearchParams();
    search.set('searchCompany', searchCompany);*/


    let headers = new Headers();
    headers.set('Accept', 'application/json');

    this
        .http
        .get(url, { headers})
        .map(resp => resp.json()["_embedded"]["companies"])
        .subscribe(
            (companies) => {
              this.companies = companies;
            },
            (err) => {
              console.error('Fehler beim Laden', err);
            }
        );
  }


}
