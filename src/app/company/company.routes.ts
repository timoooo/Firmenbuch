import { Routes, RouterModule } from '@angular/router';


import {CompanyComponent} from "./company.component";
import {LocationSearchComponent} from "../location/location.component";

const COMPANY_SEARCH_ROUTES: Routes = [
    {
        path: 'company',
        component: CompanyComponent
    },
];

export const CompanyRouterModule
    = RouterModule.forChild(COMPANY_SEARCH_ROUTES);
