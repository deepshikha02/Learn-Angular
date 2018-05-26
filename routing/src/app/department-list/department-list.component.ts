import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul *ngFor="let department of departments">
       <button [style.color]="isSelected(department) ? 'red' : 'blue'" (click)="onSelect(department)" >{{department.id}} --> {{department.name}}</button>
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

  public selectedId;

  constructor(private router:Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department){
      // navigate to the new route
      // The navigate takes 2 params : 1. route name, 2. routing params
      
      // this the absolute path navigation
      // this.router.navigate([
      //   '/departments',
      //   department.id
      // ]);

      // relative path navigation
      this.router.navigate([department.id], {relativeTo:this.route});
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
