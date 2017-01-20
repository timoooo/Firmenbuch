import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {LocationSearchComponent} from "./location.component";
import {LocationSearchRouterModule} from "./location.routes";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LocationSearchRouterModule
    ],
    declarations: [
        LocationSearchComponent
    ],
    providers: [

    ]
})
export class LocationSearchModule {

}
