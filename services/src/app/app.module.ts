import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from 'src/app/employee.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule //We dont need to explicitly register it in the providers. 
    // HttpClientModule takes care of the angulars dependency injector.
  ],
  providers: [
    EmployeeService //Empoloyee Service is being registered here.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
