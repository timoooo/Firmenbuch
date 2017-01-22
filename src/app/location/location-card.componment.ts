/**
 * Created by Timo on 22.01.2017.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Location} from "../entities/location";
import {Company} from "../entities/company";

@Component({
  templateUrl: './location-card.component.html',
  selector: 'location-card'
})
export class LocationCardComponent {
  @Input() itemLocation: Location;
  @Input() locationID: number;
}
