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

  addProduct(){
    this.model.addProduct(new Product(2,"Product 2",2000,"Description 2","2.jpg"));
  }

  deleteProduct(product: Product){
    this.model.deleteProduct(product);
  }

  updateProduct(product: Product){
    product.name = "updated";
  }
}
