import { CheckoutService } from './../../services/checkout.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() products: Product[]; 

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.checkoutService.addProduct(product);
  }

  

}
