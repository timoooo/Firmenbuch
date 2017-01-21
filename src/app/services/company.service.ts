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



  constructor(
    @Inject(BASE_URL_COMPANIES) private baseUrl: string,
    private http: Http ) {

  }

  public findAll(): Observable<Company> {

    let companies = this.baseUrl;

    return this
      .http
      .get(this.baseUrl+"/list")
      .map(resp => resp.json());

  }

}
