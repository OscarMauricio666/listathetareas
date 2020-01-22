import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modulos Construidos
import { DashboardModule } from './dashboard/dashboard.module';
import { IngresoModule } from './ingreso/ingreso.module';
// Ruta principal
import { ROUTES } from './app.routes';

// import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    IngresoModule,
    ROUTES
    // Http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
