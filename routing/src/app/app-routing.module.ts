import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from 'src/app/department-list/department-list.component';
import { EmployeeListComponent } from 'src/app/employee-list/employee-list.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from 'src/app/department-details/department-details.component';
import { DepartmentOverviewComponent } from 'src/app/department-overview/department-overview.component';
import { DepartmentContactComponent } from 'src/app/department-contact/department-contact.component';

const routes: Routes = [
  {
    path: "", //default route
    // component: DepartmentListComponent
    redirectTo: "/departments",
    pathMatch:'full' //if "" is a prefix to the route, navigate to /departments
  },
  {
    path : "departments",
    component: DepartmentListComponent
  },
  
  {
    path : "employees", 
    component: EmployeeListComponent
  },
  {
    path : "departments/:id",
    component : DepartmentDetailsComponent,
    children: [
      {
        path: "overview",
        component: DepartmentOverviewComponent
      },
      {
        path: "contact",
        component: DepartmentContactComponent
      }
    ]
  },
  {
    path: "**", //this is for all page not found 
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentDetailsComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent
];
