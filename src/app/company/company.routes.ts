import { Routes, RouterModule } from '@angular/router';


import {CompanySearchComponent} from "./company.component";
import {LocationSearchComponent} from "../location/location.component";

const COMPANY_SEARCH_ROUTES: Routes = [
    {
        path: 'company',
        component: CompanySearchComponent
    },
];

export const CompanySearchRouterModule
    = RouterModule.forChild(COMPANY_SEARCH_ROUTES);
