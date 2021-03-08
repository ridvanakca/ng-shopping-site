import { CheckoutService } from '../../services/checkout.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[]; 

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.checkoutService.addProduct(product);
  }

  

}
