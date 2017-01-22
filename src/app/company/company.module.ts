
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CompanyComponent} from "./company.component";
import {NgModule} from "@angular/core";
import {CompanyRouterModule} from "./company.routes";
import {CompanyService} from "../services/company.service";


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
      CompanyService
    ]
})
export class CompanyModule {

}
