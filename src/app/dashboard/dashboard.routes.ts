import { RouterModule, Routes } from '@angular/router';
import { ListtaskComponent } from './listtask/listtask.component';
import { TareaComponent } from './tarea/tarea.component';
import { AddtaskComponent } from './listtask/addtask/addtask.component';


const dashboardRoutes: Routes = [
    { path: '', component: ListtaskComponent},
    {path: 'listtask', component: ListtaskComponent,
    children: [
        { path: 'addtask', component: AddtaskComponent},
    ] },
    { path: 'tarea', component: TareaComponent },
];

export const DASHBOARD_ROUTES = RouterModule.forChild( dashboardRoutes);
