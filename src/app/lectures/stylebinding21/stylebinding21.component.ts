import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding21',
  templateUrl: './stylebinding21.component.html',
  styleUrls: ['./stylebinding21.component.css']
})
export class Stylebinding21Component {
  variableColor = 'yellow'
  multipleStyles = 'font-size: 1.2rem; color: cornflowerblue;'
  linkStyle = 'none'

  changeColor = 'green';
  updateColor() {
    debugger
    if (this.changeColor == 'green') {
      this.changeColor = 'orange'
    } else this.changeColor = 'green'
  }



  // Class Binding
  myClassExp = 'text-warning bg-success '
  ObjString = { 'bg-danger': true, 'text-info': true }
  arrayString = ['bg-dark', 'text-light']

  disabled = true

  codeStatus = {
    'bg-danger': true,
    'bg-success': true,
    'bg-light': true,
    'bg-info': true,
    'bg-dark': false
  }


  ApiResponse = { 'bg-success': true, 'bg-danger': false }

}
