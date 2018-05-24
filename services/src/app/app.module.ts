import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from 'src/app/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EmployeeService //Empoloyee Service is being registered here.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
