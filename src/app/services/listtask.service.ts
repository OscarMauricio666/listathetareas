import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListtaskService {
  tareas: any[] = [];
  constructor( private http: HttpClient) { }
  getTareas(){
    this.http.get(' aqui va el url')
    .subscribe( (resp: any) => {
      this.tareas = resp;
      console.log(resp);
    } );
  }
}