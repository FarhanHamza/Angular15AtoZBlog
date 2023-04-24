import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
var a = 10;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: ['  h1{color:grey} p{text-align:justify}']
  // h2 { font-weight: normal; font-size: 20px; color:red;  }
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // console.log(a)
  }
  title = 'blog';
  number = 8;

  printMyName(): void {
    "Farhan Hamza";
    console.log("a")

  }

  getName(name, age) {
    debugger
    alert(`${name} ${age}`)
  }

  getData(val: string) {
    // debugger
    console.log(val);

  }

  userDetail = [
    { name: 'Aman Saeed', email: 'aman.saeed122@gmail.com' },
    { name: 'Farhan Hamza', email: 'Farhan.gmdc@gmail.com' },
    { name: 'Faizan Hamza', email: 'Faizan@gmail.com' },
  ]
  parentPhNumber = '030452323939'
  parentEmail: any = 'Farhan.gmdc@gmail.com'
  sendRandomNum: any = 2828


  updateChildData() {
    debugger
    this.sendRandomNum = Math.floor(Math.random() * 7);
    console.log(this.sendRandomNum);
  }


  // Child to Parent
  showData = '...';
  updateData(item: string) {
    debugger
    console.log(item);
    this.showData = item

  }

  // Ai.
  handleDataEvent(data: string){
    console.log(data);
    this.showData = data;
  }

  // Two way data Binding
  userEmail: string= 'ngModel'   //:Form
  // 2nd Method: Two way data Binding
  userAddress: string = '777'

  changeAddress(input: string){
    // debugger
    this.userAddress = input; 
  }




}
