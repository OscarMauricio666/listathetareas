import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  hide = true;

  email = new FormControl('',[
  Validators.required,
  Validators.email,
]);
  getErrorMessage( ) {
    return this.email.hasError('required') ? ' Su Correo' :
    this.email.hasError('email') ? 'Correo invalido' : '';
  }
  constructor() { }

  ngOnInit() {
  }

}
