import { Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.css']
})
export class ChildtoparentComponent implements OnInit {

  constructor(){

  }
  
  @Output() updateDataEvent = new  EventEmitter<string>()
  ngOnInit(): void {
    
  }


}
