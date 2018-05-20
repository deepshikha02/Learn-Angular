import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test', 
  // selector can be put as a normal selector, class '.app-test' or [app-test]
  template: `<div>
    deeps
  </div>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
