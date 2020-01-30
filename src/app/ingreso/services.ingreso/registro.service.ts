import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces.ingreso/interfaces.ingreso';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError as ObservableThrowError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RegistroService {


  constructor( private http: HttpClient ) { }

  // private headers = new HttpHeaders({ 'Conten-Type': 'application/json'});



  createUserURL = environment.apiCreateUser;

  createUser(user: User): Observable<User> {
    return this.http
                    .post<User>(this.createUserURL, user )
                    .pipe(
                      catchError(this.errorHandler)
                    );
  }

  errorHandler(error: HttpErrorResponse) {
    return ObservableThrowError(error.message);

  }

}
