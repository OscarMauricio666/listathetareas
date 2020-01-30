import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../interfaces.ingreso/interfaces.ingreso';
import { RegistroService } from '../services.ingreso/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  model: User = { first_name: '', last_name: '', username: '', email: '', password: '' };

  hide = true;

  email = new FormControl('', [ Validators.required, Validators.email, ]);

  errorMessage = '';

  constructor( private userService: RegistroService) { }

  getErrorMessage( ) {
    return this.email.hasError('required') ? ' Su Correo' :
    this.email.hasError('email') ? 'Correo invalido' : '';
  }

  onSubmit() {
    console.log(this.model);
    this.userService.createUser(this.model).subscribe((response: User) =>  console.log(response), (error) => this.errorMessage = error);
 }

}
