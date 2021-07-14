import { Component } from '@angular/core';
import { ProductRepository } from './models/repository.model';

@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {

  public model:ProductRepository;
  productName: string;

  constructor() { 
    this.model = new ProductRepository()
    this.productName = this.model.getProductById(2).name ?? "";

  }

  title:string = "Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli Ilkin Zeynalli ";


}
