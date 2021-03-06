import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'newAngularApp';
  //added by shweta: 7-3-21
  title = 'AngularKickStartApp';
  date = new Date();
  name = "Shweta Kapoor";

  constructor() {
    console.log("constructor called......");
    this.doSomething("Great");
  }

  doSomething(val: string): void {
    console.log("old val : " + val);
    val = "Awesome";
    console.log("new val : " + val);
  }
  //till here 
}
