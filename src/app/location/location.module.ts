import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {LocationComponent} from "./location.component";
import {LocationRouterModule} from "./location.routes";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LocationRouterModule
    ],
    declarations: [
        LocationComponent
    ],
    providers: [

    ]
})
export class LocationModule{

}
