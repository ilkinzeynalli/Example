import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { ProductRepository } from './models/repository.model';

@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  public model:ProductRepository;
  products:Product[];

  constructor() { 
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
  }
}
