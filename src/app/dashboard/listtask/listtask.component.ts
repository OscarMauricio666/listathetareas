import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddtaskComponent } from '../addtask/addtask.component';

@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.css']
})
export class ListtaskComponent {
  constructor(
    public dialog: MatDialog,
    ) {}
    addtask() {
      this.dialog.open(AddtaskComponent);
    }
}
