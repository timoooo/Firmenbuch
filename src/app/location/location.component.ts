import {Component} from "@angular/core";
import {LocationService} from "../services/location.service"

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
  //public companies: Array<Company> = this.companies;

  constructor(private locationService: LocationService){

  }

  public get locations(): Array<Location> {
    return this.locationService.locations;
  }

  search(): void {
    this.locationService.findAll();

  }

  select(location: Location): void {
    this.selectedLocation = location;
  }



}
