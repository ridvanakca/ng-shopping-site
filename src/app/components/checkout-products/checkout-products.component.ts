import { CheckoutService } from './../../services/checkout.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products/product';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.scss']
})
export class CheckoutProductsComponent implements OnInit {

  @Input() checkoutProducts: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
