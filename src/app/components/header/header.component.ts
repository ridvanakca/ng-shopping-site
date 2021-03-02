import { CheckoutService } from './../../services/checkout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  constructor(private checkout: CheckoutService) { }

  ngOnInit(): void {  }

  get productsLength(): number{
    return this.checkout.getProductsLength();
  }

}
