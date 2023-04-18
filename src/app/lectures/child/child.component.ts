import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @Input() showChildPhone //= 'wu'
  @Input() showChildPhone // 7
  @Input() showChildEmail //= "w"
  @Input() recieveNumber
  title = "Pass data from 'Parent to Child'"
  
}
