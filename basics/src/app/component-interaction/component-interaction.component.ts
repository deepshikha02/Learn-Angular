import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**Sometimes the parent component (app-component) needs to interact with the chid component(s) or vice versa
   * This can be done using the @input() or @output() decorators.
   * @Input() is used to interact FROM PARENT TO CHILD
   * @Output() is used to interact FROM CHILD TO PARENT
   */

  // DECORATORS are used for interaction between components

  @Input() public parentData;
  /** STEPS TO SEND DATA FROM PARENT TO CHILD
   * 1. declare a variable in parent component
   * 2. pass it as a property in parent html eg : <p [parentData]="parentDataProperty"></p>
   * 3. access this property in the child component using the @Input() decorator
   * 4. use the accessed property from the child component to the child html.
   */
  // Also aliasing is possible i.e., variable name that is bound as property in the parent html for child component does not 
  // have to be the name of the variable in the child component as well
  @Input('parentData') public propertyFromParent;

  // Child component sends data to parent component using events
  /** STEPS TO SEND DATA FROM CHILD TO PARENT
   * 1. create an event in the child component and add the @Output() decorator to it
   *   @Output() public childEvent  = new EventEmitter();
   *   This will be an instance of the EventEmitter class.
   * 2. access the child event in the child component tag of the parent html
   *   <app-component-interaction (childEvent)="message=$event"></app-component-interaction>
   * 3. create a variable of the same name as used in the child component tag of the parent
   *  public message;
   * 4. bind/interpolate the property in the parent html 
   *   <h2>{{message}}</h2>
   */
  @Output() public childEvent  = new EventEmitter();

  onClickSendDataToParent(){
    this.childEvent.emit("Event emitting data from child component to parent component");
  }

}
