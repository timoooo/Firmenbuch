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

    let url = this.baseUrl+'/'+id;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
        .http
        .get(url, { headers})
        .map(resp => resp.json());

  }

  public findAll():void {
    let url = this.baseUrl;

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    console.log("GETTING STUFF");


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

    //hello



  console.log(this.companies);
  }
/*
  delete(company: Company): void  {
    let url = this.baseUrl+"/"+company.id;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    this
      .http
      .delete(url,{headers})
      .map((resp => resp.json()["_embedded"]["companies"]))
      .subscribe((companies) => {
          this.companies = companies;
        },
        (err) => {
          console.error('Fehler beim Löschen', err);
        });

    //setzen des companies arrays auf den aktuellen db stand
    this.findAll();

  }*/

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


    save (company :Company): Observable<Company> {
        let url = this.baseUrl+"/"+company.id;
        let locationUrl: string = 'http://localhost:8080/locations';
        let name = company.name;
        let branch = company.branch;
        let employeeNumber = company.employeeNumber;
        let foundationDate = company.foundationDate;
        let shadowedLocID = company.locationID;
        let locationID: string = locationUrl+'/'+company.locationID;

        let headers = new Headers();
        headers.set('Accept', 'application/json');


        return this
            .http
            .put(url, {name, branch, employeeNumber, foundationDate, shadowedLocID, locationID}, {headers})
            .map(resp => resp.json());
    }

    add(name: string, branch: string, employeeNumber: number, foundationDate: string, shadowedLocID: number, locationId: number){

        let url = this.baseUrl;
        let locationUrl: string = 'http://localhost:8080/locations';
        let locationID = locationUrl+'/'+ locationId;
        let headers = new Headers();
        headers.set('Accept', 'application/json');



        this.http
            .post(url, {name, branch, employeeNumber, foundationDate, shadowedLocID, locationID}, {headers})
            .map(resp => resp.json())
            .subscribe(
                (company)=>{
                    console.debug("Data has been saved")
                },
                (err)=>{
                    console.error("Error. Something went wrong")
                }
            );
    }


}
