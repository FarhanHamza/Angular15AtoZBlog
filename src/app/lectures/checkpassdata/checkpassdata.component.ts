import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkpassdata',
  templateUrl: './checkpassdata.component.html',
  styleUrls: ['./checkpassdata.component.css']
})
export class CheckpassdataComponent {
  @Input() showData = '124'
}
