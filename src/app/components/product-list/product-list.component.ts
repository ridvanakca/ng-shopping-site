import { CheckoutService } from '../../services/checkout.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  filterText: string = ""; 

  constructor(private checkoutService: CheckoutService, private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getProduct(params['categoryName']);
    })
  }

  getProduct(categoryName: string) {
    this.apiService.getProducts(categoryName).subscribe(res => {
      this.products = res; 
    });
  }

  addToCart(product: Product) {
    this.checkoutService.addProduct(product);
  }

  

}
