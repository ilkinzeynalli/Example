import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
      <input [(ngModel)]="email"  (keyup.enter)="onKeyUp()" />
      {{email}}
  `,
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {

  email:string = "ilkin@hotmail.com";

  constructor() { }

  onKeyUp(){
    console.log(this.email);
    // if($event.keyCode === 13){
    //   console.log($event.target.value);
    // }
  }
}
