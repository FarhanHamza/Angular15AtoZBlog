import { Component } from '@angular/core';

@Component({
  selector: 'app-switchcase18',
  templateUrl: './switchcase18.component.html',
  styleUrls: ['./switchcase18.component.css']
})

/* we use swicth statement when we add add more than 3, 4 conditons */

export class Switchcase18Component {
color='green'

changeColor(color:string){
  this.color = color
}

}
