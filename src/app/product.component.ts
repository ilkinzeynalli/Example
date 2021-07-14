import { Component } from '@angular/core';
import { ProductRepository } from './models/repository.model';

@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {

  public model:ProductRepository;

  constructor() { 
    this.model = new ProductRepository()
  }

  title:string = "Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli ";


}
