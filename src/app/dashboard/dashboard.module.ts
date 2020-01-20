import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListtaskComponent } from './listtask/listtask.component';
import { TareaComponent } from './tarea/tarea.component';



@NgModule({
  declarations: [ListtaskComponent, TareaComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
