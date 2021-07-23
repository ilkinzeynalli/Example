import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductRepository } from '../models/repository.model';

@Component({
  selector: 'admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  products:Product[];
  productRepository: ProductRepository;
  selectedProduct: Product;

  constructor() { 
    this.productRepository = new ProductRepository();
    this.products = this.productRepository.getProducts();
  }

  ngOnInit(): void {
  }

 
  checkSelectedClass(product: Product){
    return this.selectedProduct == product;
  }

  editProduct(product: Product){
    this.selectedProduct = product;
  }

  save(){
    const p = this.productRepository.getProductById(this.selectedProduct.id || 0);

    p.name = this.selectedProduct.name;
    p.price = this.selectedProduct.price;
    p.imageUrl = this.selectedProduct.imageUrl;
    p.description = this.selectedProduct.description;

    this.selectedProduct = null!;
  } 
}
