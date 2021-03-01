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
      sessionStorage.setItem('checkout-products', JSON.stringify(products));
    }else {
      this.checkoutProducts.push(product);
      sessionStorage.setItem('checkout-products',JSON.stringify(this.checkoutProducts));
    }
  }

  getCheckoutProducts(): Product[] {
    let products = sessionStorage.getItem('checkout-products');
    // console.log(JSON.parse(products));
    return JSON.parse(products);
  }

  getProductsLength(): number{
    let products = this.getCheckoutProducts();
    // console.log(products?.length);
    return products ? products.length : 0;
  }

  getTotalPrice() {
    let products = this.getCheckoutProducts();
    return products?.reduce((acc, prod) => acc + parseFloat(prod.price),0);
  }


}