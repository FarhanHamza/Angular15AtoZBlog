import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basictypescript33',
  templateUrl: './basictypescript33.component.html',
  styleUrls: ['./basictypescript33.component.css']
})
export class Basictypescript33Component implements OnInit {
  ngOnInit(): void {
    this.getData('8');
    this.getItem(true);

    this.getNumers([99])
  }

  item = 9.4

  tax: any = this.item * 2;


  getData(item: any) {
    // debugger
    item = parseInt(item);
    return console.log(item * 7)
  }
  getItem(item: number | boolean) {
    debugger
    // item = parseInt(item);

    if (typeof item === 'number') {
      return console.log(item * 7)
    }
    if (typeof item === 'boolean') {
      return console.log(item)
    }
  }



  // Obj
  user: { name: string, age: number } = { name: 'farhan', age: 88 };

  getNumers(numbers: number[]){
    return numbers
  }



}
