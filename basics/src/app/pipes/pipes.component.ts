import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // PIPES
  /** Pipes allow us to transform data before displaying it in the view. */
  public name = "Deepshikha Mohanta";
  public person = {
    "firstname" : "Deepshikha",
    "lastname" : "Mohanta",
    "nickname" : "dips"
  };
  public date = new Date();

}
