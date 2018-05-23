import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // STRUCTURAL DIRECTIVES
  /* Structural Directives help in removing/adding elements to the DOM. 
  There are 3 main structural Directives :
   1. ngIf 
   2. ngSwitch
   3. ngFor
    ngIf and ngSwitch directives render html elements based on some condition. 
    ngFor renders a list of html elements. 

  */

  // A property can also be bound to the ngIf directive
  public ngIfValue = false;
  /**
   * ngIf also has an else block.   
   */

  public ngIfCondition =false;

  // ngSwitch directive
  public ngSwitchColor = "pink";

  // ngFor directive
  public ngForArray = ["red","blue","green","yellow"];

}
