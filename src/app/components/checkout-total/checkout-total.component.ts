import { CheckoutService } from './../../services/checkout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-total',
  templateUrl: './checkout-total.component.html',
  styleUrls: ['./checkout-total.component.scss']
})
export class CheckoutTotalComponent implements OnInit {

  constructor(public checkout: CheckoutService) { }

  ngOnInit(): void {
  }

}
