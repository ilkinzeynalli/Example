import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h2>{{title | summary: 2}}</h2>`,
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {

  constructor() { }

  title:string = "Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli ";


}
