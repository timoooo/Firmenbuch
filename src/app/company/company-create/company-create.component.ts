

import {Component} from "@angular/core";
import {CompanyService} from "../../services/company.service";
import {LocationService} from "../../services/location.service";
import {Location} from '../../entities/location';
import {Router} from "@angular/router";
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
    locationID: number;

    constructor(private companyService: CompanyService, private locationService: LocationService, private router: Router){
        this.searchLocations();
    }

    //company: Company;
    message: string;

    public get getLocationsArray(): Array<Location> {
        return this.locationService.locationsArray;
    }

    searchLocations(): void {
        this.locationService.findAll();
    }

    add(): void{
        this.companyService.add(this.name, this.branch, this.employeeNumber, this.foundationDate, this.locationID, this.locationID);
        this.router.navigate(["home"]);
    }
}