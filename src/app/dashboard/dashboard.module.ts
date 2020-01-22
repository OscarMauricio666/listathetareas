import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListtaskComponent } from './listtask/listtask.component';
import { TareaComponent } from './tarea/tarea.component';
import { MatListModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { DASHBOARD_ROUTES } from './dashboard.routes';
import { AddtaskComponent } from './listtask/addtask/addtask.component';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LISTTASK_ROUTES } from './listtask/listtask.routes';

@NgModule({
  declarations: [ListtaskComponent, TareaComponent, AddtaskComponent,],
  imports: [
    CommonModule,
    DASHBOARD_ROUTES,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    LISTTASK_ROUTES
  ],
})
export class DashboardModule { }
