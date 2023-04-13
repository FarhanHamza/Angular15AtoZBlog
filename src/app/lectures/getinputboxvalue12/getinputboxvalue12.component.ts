import { Component } from '@angular/core';

@Component({
  selector: 'app-getinputboxvalue12',
  templateUrl: './getinputboxvalue12.component.html',
  styleUrls: ['./getinputboxvalue12.component.css']
})
export class Getinputboxvalue12Component {
  displayVal: string = "";
  getInputValue(value: string) {
  // debugger
    console.log(value);
    this.displayVal = value
  }
}
