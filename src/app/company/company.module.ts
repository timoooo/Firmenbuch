
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CompanySearchComponent} from "./company.component";
import {NgModule} from "@angular/core";
import {CompanySearchRouterModule} from "./company.routes";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CompanySearchRouterModule
    ],
    declarations: [
        CompanySearchComponent
    ],
    providers: [

    ]
})
export class CompanySearchModule {

}
