import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  clickText = "deeps";
  constructor() { }

  ngOnInit() {
  }

  // Event handler for event binding
  onClick(){
    console.log("click me clicked");
    this.clickText = "Click button clicked and value set with interpolation";
  }

  onClickPassEvent(e){
    console.log(e);
  }

  onClickLogInput(e){
    console.log(e);
  }

}
