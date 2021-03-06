import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { convertToParamMap } from '@angular/router/src/shared';

@Component({
  selector: 'app-department-details',
  template: `
    <p>
      department-details works!
    </p>
    <h2>{{departmentId}}</h2>

    <p>
      <button (click)="showOverview()" >overview</button>
      <button (click)="showContact()">contact</button>
    </p>
    <router-outlet></router-outlet>

    <p>
      <button (click)="goPrevious()">previous department</button>
      <button (click)="goNext()">next department</button>
    </p>
    <div>
      <button (click)="goBackToList()">Go back to list</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId;
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    // SNAPSHOT APPROACH
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    // PARAM MAP APPROACH
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  goBackToList(){
    let selectedId  = this.departmentId || null;
    // passing an optional param

    //absolute path route
    // this.router.navigate(['/departments', {
    //   id : selectedId
    // }]);

    // relative path route
    this.router.navigate(['../',{id : selectedId}], {relativeTo:this.route}); //go back one segment in the url

  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }

  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }

}
