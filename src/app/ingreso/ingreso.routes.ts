import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';


const ingresoRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent}
];

export const INGRESO_ROUTES = RouterModule.forChild( ingresoRoutes);
