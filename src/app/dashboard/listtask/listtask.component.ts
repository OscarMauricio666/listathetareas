import { Component, OnInit } from '@angular/core';
// import { ListtaskService } from '../../services/listtask.service';
import { MatDialog } from '@angular/material';
import { AddtaskComponent } from '../addtask/addtask.component';


@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.css']
})
export class ListtaskComponent implements OnInit {
  // listtareas: any[] = [];
  // loading: boolean;
  // error: boolean;
  // ms: string;
  // constructor( private tareas: ListtaskService ) {
  //   this.loading = true;
  //   this.error = false;

  //   this.tareas.getTareas()
  //  }

  constructor( public dialog: MatDialog) {}
    addtask() {
      this.dialog.open(AddtaskComponent);
    }
  

  ngOnInit() {
  }



}
