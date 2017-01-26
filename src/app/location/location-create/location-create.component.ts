/**
 * Created by Timo on 26.01.2017.
 */
import {Component, Input} from "@angular/core";
import {LocationService} from "../../services/location.service";
import {ActivatedRoute} from "@angular/router";
import "rxjs/Rx";
import {Location} from "../../entities/location";


@Component({
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.css'],
  providers: []
})


export class LocationCreateComponent {
  @Input() name: string;
  @Input() land: string;


  id: string;
  showDetails: string;
  location: Location;
  message: string;


  constructor(private locationService: LocationService,
              route: ActivatedRoute,) {

    route.params.subscribe(
      p => {
        this.id = p['id'];
        this.showDetails = p['showDetails'];
        this.load(this.id);
      }
    )
  }


  load(id: string): void {
    this.locationService
      .findById(id)
      .subscribe(
        location => {
          this.location = location;
          this.message = "";
        },
        (err) => {
          this.message = "Fehler beim Spreichern: " + err.text();
        }
      )
  }

  add(): void {
    this.locationService.add(this.name, this.land);

  }
}
