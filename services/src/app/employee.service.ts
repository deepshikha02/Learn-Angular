import { Injectable } from '@angular/core';

/**Injectable means that this service itself might have injected dependencies. */
// Component classes dont have @Injectable since they yhave the @Component decorator which informs angular that it might 
// have dependecies and make use of the dependency injection system.
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {
        "key" : "1",
        "name" : "Deepshikha Mohanta",
        "age" : 26
      },
      {
        "key" : "2",
        "name" : "Akash Singh",
        "age" : 27
      },
      {
        "key" : "3",
        "name" : "Rishabh Srivastav",
        "age" : 27
      },
      {
        "key" : "4",
        "name" : "Huma Perween",
        "age" : 29
      },
      {
        "key" : "5",
        "name" : "Priya Agrawal",
        "age" : 26
      }
    ];
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
