import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybind15',
  templateUrl: './propertybind15.component.html',
  styleUrls: ['./propertybind15.component.css']
})
export class Propertybind15Component {
  top = 'farhan'
  disable = false;


  isDisable() {
    // if (this.disable == false) {
    //   this.disable = true;
    // } else {
    //   this.disable = false;
    // }
    this.disable = this.disable == false ? true : this.disable = false
  }
}
