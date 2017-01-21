
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CompanyComponent} from "./company.component";
import {NgModule} from "@angular/core";
import {CompanyRouterModule} from "./company.routes";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CompanyRouterModule
    ],
    declarations: [
        CompanyComponent
    ],
    providers: [

    ]
})
export class CompanyModule {

}
