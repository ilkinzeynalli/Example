import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Product } from './models/product.model';
import { ProductRepository } from './models/repository.model';

@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productRepository: ProductRepository;
  newProduct: Product;
  formSubmitted: boolean;

  constructor() { 
    this.newProduct = new Product();
    this.productRepository = new ProductRepository();
  }

  get jsonProduct(){
    return JSON.stringify(this.newProduct);
  }
  
  log(state:any){
    console.log(state);
  }

  getFormValidationErrors(form: NgForm) : string[]{
    let messages: string[] = [];

    Object.keys(form.controls).forEach(key=>{
      console.log(form.controls[key].errors);
      this.getValidationErrors(form.controls[key],key)
          .forEach(message=>messages.push(message));
    })
    return messages;
  }

  getValidationErrors(state:any,key: string = null!): string[] {
    let ctrlName: string = state.name || key;
    let messages: string[] = [];

    if(state.errors){
      for(let errorName in state.errors){
        switch(errorName){
          case 'required':
            messages.push(`You must enter a ${ctrlName}`);
            break;
          case 'minlength':
            messages.push(`Min 3.character for ${ctrlName}`);
            break;
          case 'pattern':
            messages.push(`${ctrlName} containes illegal character`);
            break;
        }
      }
    }

    return messages;
  }

  submitForm(form: NgForm){
    console.log(form);
    this.formSubmitted = true;

    if(form.valid){
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

  addProduct(product: Product){
    this.productRepository.addProduct(product);
  }
}
