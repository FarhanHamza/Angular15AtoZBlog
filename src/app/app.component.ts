import { Component, OnInit } from '@angular/core';
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
    {name: 'Aman Saeed', email: 'aman.saeed122@gmail.com'},
    {name: 'Farhan Hamza', email: 'Farhan.gmdc@gmail.com'},
    {name: 'Faizan Hamza', email: 'Faizan@gmail.com'},
  ]
  parentPhNumber = '030452323939'
  parentEmail = 'Farhan.gmdc@gmail.com'

}
