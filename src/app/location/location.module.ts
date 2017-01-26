import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule, Input} from "@angular/core";
import {LocationComponent} from "./location.component";
import {LocationRouterModule} from "./location.routes";
import {LocationService} from "../services/location.service";
import {LocationCardComponent} from "./location-card.componment";
import {LocationCreateComponent} from "./location-create/location-create.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LocationRouterModule
    ],
    declarations: [
        LocationComponent,
        LocationCardComponent,
      LocationCreateComponent
    ],
    providers: [
      LocationService

    ]
})
export class LocationModule{

}
