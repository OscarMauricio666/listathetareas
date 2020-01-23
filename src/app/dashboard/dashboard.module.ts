import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListtaskComponent } from './listtask/listtask.component';
import { TareaComponent } from './tarea/tarea.component';
import { MatListModule, MatInputModule, MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';
import { DASHBOARD_ROUTES } from './dashboard.routes';
import { AddtaskComponent } from './addtask/addtask.component';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListtaskComponent, TareaComponent, AddtaskComponent],
  entryComponents: [AddtaskComponent],
  imports: [
    CommonModule,
    DASHBOARD_ROUTES,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatDialogModule
  ],
})
export class DashboardModule { }
