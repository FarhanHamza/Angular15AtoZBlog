import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.getData('a');
  }
  userData: any;

  getData(data: any) {
    console.warn(data);
    this.userData = data;
  }
}
