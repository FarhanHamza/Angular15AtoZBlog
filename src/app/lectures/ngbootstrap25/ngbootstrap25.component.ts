import { Component } from '@angular/core';
import { Alert } from './alert';
import { NgFor } from '@angular/common';
import {NgbPopoverConfig, NgbAlertModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertList } from './alert-list';


@Component({
  selector: 'app-ngbootstrap25',
  standalone: true,
  imports: [NgFor, NgbAlertModule, NgbPopoverModule],
  templateUrl: './ngbootstrap25.component.html',
  styleUrls: ['./ngbootstrap25.component.css'],
  host: { class: 'd-block' }
})
export class Ngbootstrap25Component {
constructor(config: NgbPopoverConfig){
// customize default values of popovers used by this component tree
config.placement = 'end';
config.triggers = 'hover';


// example of usage for popperOptions
config.popperOptions = (options) => {
  for (const modifier of options.modifiers || []) {
    if (modifier.name === 'offset' && modifier.options) {
      modifier.options['offset'] = () => [30, 8];
    }
  }
  return options;
};
}
alerts: Alert[] = AlertList;

close(alert:Alert){

  this.alerts.splice(this.alerts.indexOf(alert),1)

}



}
