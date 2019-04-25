import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Este es especial para crear formularios de angular
import { FormsModule } from '@angular/forms';
// Esto para que funcione la ruta del formulario
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
