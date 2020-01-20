import { RouterModule, Routes } from '@angular/router';
import { IngresoModule } from './ingreso/ingreso.module';



const routes: Routes = [
    { path: '',
      loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule) },
    { path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule ) },
];

export const ROUTES = RouterModule.forRoot( routes, { useHash: true } );