import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';


const listtaskRoutes: Routes = [
    { path: 'addtask', component: AddtaskComponent}
];

export const LISTTASK_ROUTES = RouterModule.forChild( listtaskRoutes);
