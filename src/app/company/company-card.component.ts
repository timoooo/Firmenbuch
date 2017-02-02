import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Company} from "../entities/company";

import {Injectable, Inject} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL_COMPANIES} from "../app.tokens";
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import {CompanyService} from "../services/company.service";
import {Router} from "@angular/router";

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


  constructor(private companyService: CompanyService,
              private router: Router) {
  }


  select() {
    this.selectedItemChange.next(this.item);
  }


  delete(company: Company): void {
    this.companyService.delete(company);
    this.router.navigate(["home"]);

  }
}
