import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Company} from "../entities/company";

import {Injectable, Inject} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL_COMPANIES} from "../app.tokens";
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import {CompanyService} from "../services/company.service";

@Component({
    templateUrl: './company-card.component.html',
    selector: 'company-card',
    styleUrls: [
        './company.component.css'
    ],
})
export class CompanyCardComponent {

    @Input() item: Company;
    @Input() selectedItem: Company;
    @Output() selectedItemChange = new EventEmitter();
    companies: Array<Company> = [];
    constructor( @Inject(BASE_URL_COMPANIES) private baseUrl: string,
                 private http: Http,
    private companyService: CompanyService){

    }
    select() {
        this.selectedItemChange.next(this.item);
    }

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
    //this.companyService.findAll();

  }
}
