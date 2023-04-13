import { Component } from '@angular/core';

@Component({
  selector: 'app-both',
  template: `
  <h3> --inline-style  --inline-template</h3>
    <p class="both">
      both works!
    </p>
  `,
  styles: [ 
      `.both{ color: orange}`
  ]
})
export class BothComponent {

}
