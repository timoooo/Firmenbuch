import { Routes, RouterModule } from '@angular/router';


import {CompanySearchComponent} from "./company-search.component";
import {LocationSearchComponent} from "../location-search/location-search.component";

const COMPANY_SEARCH_ROUTES: Routes = [
    {
        path: 'company-search',
        component: CompanySearchComponent
    },
];

export const CompanySearchRouterModule
    = RouterModule.forChild(COMPANY_SEARCH_ROUTES);