import { Component } from '@angular/core';

@Component({
  selector: 'app-couter',
  templateUrl: './couter.component.html',
  styles: [
  ]
})
export class CouterComponent {
  count = 0;

  counter(type: string) {
    // this.count += type === 'add' ? 1 : -1;
    debugger

    type === "add" ? this.count++ : this.count == 0 ? this.count == 0 : this.count--;

    // if (type == 'add') {
    //   this.count++;
    // }
    // else {
    //   if (this.count == 0) {
    //      this.count == 0; 
    //   } else this.count--;
    //  //  or this.count === 0 ? this.count=0 : this.count--;
    // }

  }
}
