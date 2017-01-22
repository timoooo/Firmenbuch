

import {Component, Input, Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";
import {CompanyService} from "../services/company.service";
import {Company} from "../entities/company";


@Component({
    selector: 'comp', // <flight-search></...>
    templateUrl: 'company.component.html',
    styleUrls: [
      'company.component.css'
    ],
    providers:[  ]
})

@Injectable()
export class CompanyComponent {

    public searchCompany: string;

    constructor(private companyService: CompanyService){

    }

    public get companies(): Array<Company>{
        return this.companyService.companies;
    }

getAll(){

}


}
