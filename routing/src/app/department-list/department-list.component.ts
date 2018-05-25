import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul *ngFor="let department of departments">
      <button (click)="onSelect(department)" >{{department.id}} --> {{department.name}}</button>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id" : 1, name : "Angular"},
    {"id" : 2, name : "Node"},
    {"id" : 3, name : "MongoDB"},
    {"id" : 4, name : "Ruby"},
    {"id" : 5, name : "Bootstrap"}
  ];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSelect(department){
      // navigate to the new route
      // The navigate takes 2 params : 1. route name, 2. routing params
      this.router.navigate([
        '/departments',
        department.id
      ]);
  }

}
