import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule, Input} from "@angular/core";
import {LocationComponent} from "./location.component";
import {LocationRouterModule} from "./location.routes";
import {LocationService} from "../services/location.service";
import {LocationCardComponent} from "./location-card.componment";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LocationRouterModule
    ],
    declarations: [
        LocationComponent,
        LocationCardComponent
    ],
    providers: [
      LocationService

    ]
})
export class LocationModule{

}
