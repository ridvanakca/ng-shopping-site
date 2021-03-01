import { Injectable } from '@angular/core';
import { Product } from '../components/products/product';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  checkoutProducts: Product[] = [];

  constructor() { }

  addProduct(product: Product) {
    
    let products = this.getCheckoutProducts();
    // console.log(products ? {...products} : products)
    if(products){
      products.push(product);
      localStorage.setItem('checkout-products', JSON.stringify(products));
    }else {
      this.checkoutProducts.push(product);
      localStorage.setItem('checkout-products',JSON.stringify(this.checkoutProducts));
    }
  }

  getCheckoutProducts(): Product[] {
    let products = localStorage.getItem('checkout-products');
    // console.log(JSON.parse(products));
    return JSON.parse(products);
  }
}
