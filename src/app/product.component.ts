import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { ProductRepository } from './models/repository.model';

@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productRepository: ProductRepository;
  product: Product;
  disabled: boolean = true;

  constructor() {
    this.productRepository = new ProductRepository();
    this.product = this.productRepository.getProductById(1);
  }

  onKeyUp(name: string){
    console.log(name);
    // if($event.keyCode === 13){
    //   console.log($event.target.value);
    // }
  }
}
