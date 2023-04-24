import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-childtoparent-ai',
  templateUrl: './childtoparent-ai.component.html',
  styleUrls: ['./childtoparent-ai.component.css']
})
export class ChildtoparentAIComponent implements OnInit{
  @Output() dataEvent = new EventEmitter<string>();


  ngOnInit(): void {
    // this.dataEvent.emit('123456789')
  }
}
