import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [];
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    // this.employees = this._employeeService.getEmployees();

      // subscribing to the observable while making the http call
      this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }
  
}
