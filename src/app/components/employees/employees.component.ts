import { Component, OnInit } from '@angular/core';

// Cargar el services
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

declare var M: any;


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Updated Successfuly', classes: 'yellow lighten-2 black-text' });
          this.getEmployees();
        });
    } else {
      this.employeeService.postEmployee(form.value)
        .subscribe(res => {
          if (res == "err") {
            return M.toast({ html: 'Error when saving', classes: 'red lighten-2' })
          } else {
            this.resetForm(form);
            M.toast({ html: 'Saved Successfuly', classes: 'green lighten-2' });
            this.getEmployees();
          }

        });
    }

  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[];

      });
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: string, form) {
    if (confirm('Are you sure you want to delete it?')) {
      this.employeeService.deleteEmployee(_id)
        .subscribe(res => {
          this.getEmployees();
          M.toast({ html: 'Deleted Successfuly', classes: 'red lighten-1' });
        });
    }

  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }

  }

} // FIn class
