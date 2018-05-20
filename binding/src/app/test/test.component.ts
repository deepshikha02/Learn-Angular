import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // public name = prompt("Enter name");
  public name = "Deeps";
  public url = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
    // method needs to return the value that needs to be displayed. this is kinda life a formatter.
  }

  // Things not possible with interpolation(putting values in double curly braces)
  // 1. Access to the window object
  //    Cannot do stuff like window.location
  //    You can access stuff by assigning values to a variable and then access that variable.

  // ATTRIBUTES VS PROPERTIES
  // Attributes are defined by HTML.
  // Attribute initialize the DOM properties once and they are done.
  // Attribute values cannot change once they are initialized

  // Properties are defined by DOM. 
  // Property values can change even after initialization.
  public myId = "testId";

  // Why do we need property binding if we have interpolation?
  // Ans : Interpolation only works with String values and there are HTML proeprties which are not strings.

  // Example : The disabled property of Input field. Which cannot be set with a string. 
  public isDisabled = true;
}
