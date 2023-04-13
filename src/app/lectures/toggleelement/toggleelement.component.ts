import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggleelement',
  templateUrl: './toggleelement.component.html',
  styleUrls: ['./toggleelement.component.css']
})
export class ToggleelementComponent implements OnInit {

  ngOnInit(): void {
    
  this.passwordClass = {
    'btn-success' : this.password === 'password',
    'btn-danger' : this.password === 'text'
  }
  }
  display = true
  password = 'password'
  toggle() {
    debugger
    // if (this.display == true) {
    //   this.display = false
    // } else this.display = true
    this.display = !this.display

  }


  passwordClass :any

  togglePassword(){
    debugger
    // icon
    if (this.password === 'password') {
      this.password  = 'text'
    } else this.password  = 'password';

    // class
    this.passwordClass = {
      'btn-success' : this.password === 'password',
      'btn-danger' : this.password === 'text'
    }

  }



}
