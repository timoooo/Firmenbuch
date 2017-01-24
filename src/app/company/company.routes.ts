import { Routes, RouterModule } from '@angular/router';


import {CompanyComponent} from "./company.component";
import {CompanyEditComponent} from "./company-edit/company-edit.component";


const COMPANY_SEARCH_ROUTES: Routes = [
    {
        path: 'company',
        component: CompanyComponent
    },
    {
        path: 'company-edit/:id',
        component: CompanyEditComponent
    },
];

export const CompanyRouterModule
    = RouterModule.forChild(COMPANY_SEARCH_ROUTES);
