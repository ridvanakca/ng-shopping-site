import { CheckoutService } from './../../services/checkout.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/components/products/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  items: Product[] = [];

  constructor(private checkout: CheckoutService) { }

  ngOnInit(): void {
    this.getCheckoutProducts();
  }

  getCheckoutProducts() {
   this.items = this.checkout.getCheckoutProducts();
  }

  get productsLength(): number{
    return this.checkout.getProductsLength();
  }

  deleteEventHandler(p) {
    this.getCheckoutProducts();
  }


}
