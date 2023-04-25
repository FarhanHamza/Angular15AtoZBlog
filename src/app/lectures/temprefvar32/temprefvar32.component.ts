import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-temprefvar32',
  templateUrl: './temprefvar32.component.html',
  styleUrls: ['./temprefvar32.component.css']
})
export class Temprefvar32Component implements OnInit {
  ngOnInit(): void {
    // console.log(this.myInput.nativeElement.value);

  }
  getval = (input: HTMLElement) => {
    debugger
    console.warn(input);
  }

// Using Chat GPT
  @ViewChild('myInputRef', { static: true }) myInput: ElementRef;

  ngAfterViewInit() {
    debugger
    console.log(this.myInput.nativeElement.value);
  }

  

}
