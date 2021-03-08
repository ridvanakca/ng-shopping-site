import { CheckoutService } from './../../services/checkout.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.scss']
})
export class CheckoutProductsComponent implements OnInit {

  @Input() checkoutProducts: Product[] = [];
  @Output() deleteEvent = new EventEmitter<Product>();

  constructor(private checkout: CheckoutService) { }

  ngOnInit(): void {
  }

  deleteProduct(product) {
    this.checkout.deleteProduct(product);
    this.deleteEvent.emit(product);
  }

}
