import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resuableCompDetail29',
  templateUrl: './ResuableCompDetail29.component.html',
  styleUrls: ['./ResuableCompDetail29.component.css']
})
export class ResuableCompDetail29Component {
  @Input() item: {name:string, email: string}= {name:"", email: ""}
}
