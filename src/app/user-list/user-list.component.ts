import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [ `
  .h3Blue{color:blue}
  .Btn{color: green; padding:10px;background-color:yellow}

  `
  ]
})
export class UserListComponent implements OnInit{
  btn:any
  ngOnInit(): void {

  }
  
  show(){
    alert("name is Farhan")
  }
}
