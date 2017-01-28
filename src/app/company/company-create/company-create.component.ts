

import {Component} from "@angular/core";
import {CompanyService} from "../../services/company.service";
@Component({
    templateUrl: './company-create.component.html',
    styleUrls: ['./company-create.component.css'],
    providers:[]
})

export class CompanyCreateComponent{

    name: string;
    branch: string;
    employeeNumber: number;
    foundationDate: string;
    shadowedLocID: number;

    constructor(private companyService: CompanyService){

}
    add(): void{
        this
            .companyService
            .add(this.name, this.branch, this.employeeNumber, this.foundationDate, this.shadowedLocID);
    }
}