import { Injectable } from '@angular/core';

// Para poder comunicar nuestro frontend con nuestra api rest
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

// Cargar la url
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  employees: Employee[];
  public url: string;

  constructor(private http: HttpClient) { 
    this.selectedEmployee = new Employee();
    this.url = Global.url;
  }

  getEmployees(){
    return this.http.get(this.url);
  }

  postEmployee(employee: Employee){
      return this.http.post(this.url, employee);
  }

  putEmployee(employee: Employee){
    return this.http.put(this.url + `/${employee._id}`, employee);
  }

  deleteEmployee(_id: string){
    return this.http.delete(this.url + `/${_id}`);
  }

}
