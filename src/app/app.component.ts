import { Component, OnInit } from '@angular/core';
var a = 10;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: ['h2 { font-weight: normal; font-size: 20px; color:red;  }  h1{color:grey} p{text-align:justify}']
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

  parentPhNumber  = '030452323939'
  parentEmail  = 'Farhan.gmdc@gmail.com'

}
