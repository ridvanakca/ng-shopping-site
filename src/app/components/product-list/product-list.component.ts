import { CheckoutService } from '../../services/checkout.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  filterText: string = ""; 

  constructor(private checkoutService: CheckoutService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(res => {
      this.products = res; 
    });
  }

  addToCart(product: Product) {
    this.checkoutService.addProduct(product);
  }

  

}
