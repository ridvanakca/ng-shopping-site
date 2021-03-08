import { CheckoutService } from './../../services/checkout.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private checkout: CheckoutService ,private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    const id = this.route.snapshot.paramMap.get('id');
    return this.api.getSingleProduct(id).subscribe( data => this.product = data);
  }

  addToCart(product: Product) {
    this.checkout.addProduct(product);
  }

}
