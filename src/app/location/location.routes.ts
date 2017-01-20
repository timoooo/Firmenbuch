import { Routes, RouterModule } from '@angular/router';


import {LocationSearchComponent} from "./location.component";

const LOCATION_SEARCH_ROUTES: Routes = [

    {
        path: 'location',
        component: LocationSearchComponent
    },
];

export const LocationSearchRouterModule
    = RouterModule.forChild(LOCATION_SEARCH_ROUTES);
