import { Routes, RouterModule } from '@angular/router';


import {LocationSearchComponent} from "../location-search/location-search.component";

const LOCATION_SEARCH_ROUTES: Routes = [

    {
        path: 'location-search',
        component: LocationSearchComponent
    },
];

export const LocationSearchRouterModule
    = RouterModule.forChild(LOCATION_SEARCH_ROUTES);