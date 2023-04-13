import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor19',
  templateUrl: './ngfor19.component.html',
  styles: [
  ]
})
export class Ngfor19Component {

  user  = ['farhan', 'hamza', 'zahoor', 'faizan', 'ahmad'];
  userDetail = [
    {name: 'farhan', email: "farhan.gmdc@gmail.com", phone: '+92 3066751422'},
    {name: 'faizan', email: "faizan@gmail.com", phone: '+92 22222222222'},
    {name: 'ayyan', email: "ayyan727@gmail.com", phone: '+92 11111111111'},
    {name: 'azan', email: "azan7q7q@gmail.com", phone: '+92 44444444444'},
  ]
}
