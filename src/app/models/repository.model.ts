import { SimpleDatasource } from "./datasource.model";
import { Product } from "./product.model";

export class ProductRepository{
    private products:Product[];

    constructor(){
        this.products = new SimpleDatasource().getProducts();
    }

    getProducts():Product[]{
        return this.products;
    }

    getProductById(id:Number): Product{
        return this.products.filter(p=>p.id === id)[0];
    }

    getProductsCount(): number{
        return this.products.length;
    }

    addProduct(product: Product){
        this.products.push(product);
    }

    deleteProduct(product: Product){
        let index = this.products.indexOf(product);

        this.products.splice(index,1);
    }
}