import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMessage;
  // Service dependency for the particular component is declared in the constructor
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    // the instance of the employee service needs to be called on init
    // this.employees = this._employeeService.getEmployees();

    // subscribing to the observable while making the http call
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
              error => this.errorMessage = error);
  }

}
