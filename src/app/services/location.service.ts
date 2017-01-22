/**
 * Created by Timo on 22.01.2017.
 */
/**
 * Created by Timo on 21.01.2017.
 */
import {Injectable, Inject} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL_LOCATIONS} from "../app.tokens";
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class LocationService {

  locations: Array<Location> = [];

  constructor(
    @Inject(BASE_URL_LOCATIONS) private baseUrl: string,
    private http: Http ) {

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
        (locations) => {
          this.locations = locations["_embedded"]["companies"];
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );

    //hello



    console.log(this.locations);
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
        (locations) => {
          this.locations = locations;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );
  }


}
