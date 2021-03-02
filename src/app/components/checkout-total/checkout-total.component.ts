import { CheckoutService } from './../../services/checkout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-total',
  templateUrl: './checkout-total.component.html',
  styleUrls: ['./checkout-total.component.scss']
})
export class CheckoutTotalComponent implements OnInit {

  constructor(private checkout: CheckoutService) { }

  ngOnInit(): void {
  }

  get productsLength(): number{
    return this.checkout.getProductsLength();
  }

  get totalPrice(): number{
    return this.checkout.getTotalPrice();
  }

}
