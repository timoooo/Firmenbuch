

import {Component} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";
import {CompanyService} from "../services/company.service";
import {Company} from "../entities/company";


@Component({
    selector: 'company', // <flight-search></...>
    templateUrl: './company.component.html',
    styleUrls: [
      './company.component.css'
    ],
    providers:[  ]
})


export class CompanyComponent {

    public searchCompany: string;
    public selectedCompany: Company;
    //public companiesArray: Array<Company> = this.companiesArray;

    constructor(private companyService: CompanyService){

  }

    public get companies(): Array<Company> {
        return this.companyService.companies;
    }

    search(): void {
        this.companyService.findAll();

    }

    select(company: Company): void {
        this.selectedCompany = company;
    }

}
