import {Component} from "@angular/core";
import {LocationService} from "../services/location.service"
import {Location} from '../entities/location';
import {Company} from "../entities/company";
import {CompanyService} from "../services/company.service";

@Component({
  selector: 'location', // <flight-search></...>
  templateUrl: './location.component.html',
  styleUrls: [
    '../company/company.component.css'
  ],
  providers:[  ]
})
export class LocationComponent {

  public searchStringLocation: string;
  public selectedLocation: Location;
  //public companiesArray: Array<Company> = this.companiesArray;

  constructor(private locationService: LocationService,
              private companyService: CompanyService){

  }

  public get getLocationsArray(): Array<Location> {
    return this.locationService.locationsArray;
  }

  public get getCompaniesArray():Array<Company> {
    return this.companyService.companies;
  }

  searchLocations(): void {
    this.locationService.findAll();

  }

  select(location: Location): void {
    this.selectedLocation = location;
  }



}
