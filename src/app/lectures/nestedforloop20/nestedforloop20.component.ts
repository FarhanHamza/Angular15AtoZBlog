import { Component } from '@angular/core';

@Component({
  selector: 'app-nestedforloop20',
  templateUrl: './nestedforloop20.component.html',
  styles: [
  ]
})
export class Nestedforloop20Component {
  developers = [
    { name: "Asif", email: 'asifg202@gmail.com', skills: [{ frontened: ['JS +Angular',] }, { backened: ['SQL .NET'] },{ GFX: ['Adobe PS, illustrator'] }] },
    { name: "Ahmad", email: 'ahmad@gmail.com', skills: [{ frontened: ['DevExtreme'] }, { backened: ['.NET'] },{ GFX: ['Adobe PS, illustrator'] }] },
    { name: "Faizan", email: 'faizan@gmail.com', skills: [{ frontened: ['Angular'] }, { backened: ['.NET'] },{ GFX: ['Adobe PS, illustrator'] }] },
  ]

  showDetails = true;
  isVisible = true
}
