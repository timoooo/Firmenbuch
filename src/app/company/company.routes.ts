import { Routes, RouterModule } from '@angular/router';


import {CompanyComponent} from "./company.component";
import {CompanyEditComponent} from "./company-edit/company-edit.component";
import {CompanyCreateComponent} from "./company-create/company-create.component";


const COMPANY_SEARCH_ROUTES: Routes = [
    {
        path: 'company',
        component: CompanyComponent
    },
    {
        path: 'company-edit/:id',
        component: CompanyEditComponent
    },
    {
        path: 'company-create',
        component: CompanyCreateComponent
    }
];

export const CompanyRouterModule
    = RouterModule.forChild(COMPANY_SEARCH_ROUTES);
