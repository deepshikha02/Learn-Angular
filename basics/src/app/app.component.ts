import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // sending data from the parent component to the child component
  public parentToChild = "message from app-component to child-component";

  // receiving data from the child component to the parent component
  public message = "initial message";
}
