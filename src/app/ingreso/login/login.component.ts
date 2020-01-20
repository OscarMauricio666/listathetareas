import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [
    Validators.required,
    Validators.email,    
  ]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Su Correo' :
    this.email.hasError('email') ? 'Correo invalido' : '';
  }

  constructor() { }

  ngOnInit() {
  }

}
