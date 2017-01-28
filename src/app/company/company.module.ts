
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CompanyComponent} from "./company.component";
import {NgModule} from "@angular/core";
import {CompanyRouterModule} from "./company.routes";
import {CompanyService} from "../services/company.service";
import {CompanyCardComponent} from "./company-card.component";
import {CompanyEditComponent} from "./company-edit/company-edit.component";
import {CompanyCreateComponent} from "./company-create/company-create.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CompanyRouterModule
    ],
    declarations: [
        CompanyComponent,
        CompanyCardComponent,
        CompanyEditComponent,
        CompanyCreateComponent
    ],
    providers: [
        CompanyService
    ]
})
export class CompanyModule {

}
