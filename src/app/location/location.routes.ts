import { Routes, RouterModule } from '@angular/router';


import {LocationComponent} from "./location.component";

const LOCATION_SEARCH_ROUTES: Routes = [

    {
        path: 'location',
        component: LocationComponent
    },
];

export const LocationRouterModule
    = RouterModule.forChild(LOCATION_SEARCH_ROUTES);
