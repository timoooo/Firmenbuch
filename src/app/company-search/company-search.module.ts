
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CompanySearchComponent} from "./company-search.component";
import {NgModule} from "@angular/core";
import {CompanySearchRouterModule} from "./company-search.routes";

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