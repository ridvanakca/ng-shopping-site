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
  prodNum;
  

  constructor(public checkout: CheckoutService) { }

  ngOnInit(): void {
    this.getCheckoutProducts();
    this.getNumber();
  }

  getCheckoutProducts() {
   this.items = this.checkout.getCheckoutProducts();
  }

  getNumber(){
    this.prodNum = this.checkout.getTotalPrice();
    console.log(this.prodNum);
  }

  deleteEventHandler(p) {
    this.getCheckoutProducts();
  }


}
