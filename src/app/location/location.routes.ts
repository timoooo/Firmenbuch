import { Routes, RouterModule } from '@angular/router';

import {LocationComponent} from "./location.component";
import {LocationCreateComponent} from "./location-create/location-create.component";

const LOCATION_SEARCH_ROUTES: Routes = [

    {
        path: 'location',
        component: LocationComponent
    },
  {
    path: 'location-create',
    component: LocationCreateComponent
  }
];

export const LocationRouterModule
    = RouterModule.forChild(LOCATION_SEARCH_ROUTES);
