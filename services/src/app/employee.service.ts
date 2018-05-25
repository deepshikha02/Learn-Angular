import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from 'src/app/employee';
import { Observable } from 'rxjs/internal/observable';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';


/**Injectable means that this service itself might have injected dependencies. */
// Component classes dont have @Injectable since they yhave the @Component decorator which informs angular that it might 
// have dependecies and make use of the dependency injection system.
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = "/assets/data/employees.json";
  constructor(private http:HttpClient) { }
  // http client is imported here

  getEmployees(): Observable<IEmployee[]>{
    // step 1 : make the get request
    return this.http.get<IEmployee[]>(this._url)
    .catch(this.errorHandler);
    // step 2 : cast the response into an array. The response is returned in an Observable which has to be cast into an employee interface.
  }

  errorHandler(error: HttpErrorResponse){
    console.log(error);
    return Observable.throw(error.message || "server error");
  }

  /**A dependency injector is a design pattern as well as a framework provided by Angular  */
  /** After creating the service you need to register the service with a dependency injector.
   * There are multiple places where you can register the service. But where you register is important. 
   * Mainly because Angular has a Hierarchical Dependency Injection.
   * To register a service, you need to providers metadata.
   * Next step is to declare the dependency in the components that require them.
   * This is done in the constructor of the receiving component. 
   */
}
