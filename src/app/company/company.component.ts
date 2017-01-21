

import {Component, Input, Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";


@Component({
    selector: 'company', // <flight-search></...>
    templateUrl: 'company.component.html',
    styleUrls: [
      'company.component.css'
    ],
    providers:[  ]
})

@Injectable()
export class CompanyComponent {
  http: Http;
  constructor(http: Http) {
    console.log('Creating DataService');
    this.http = http;
  }

getAll(){

}


}
