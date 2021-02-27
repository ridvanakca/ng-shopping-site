import { ApiService } from './../../services/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/components/products/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  items: Product[];

  constructor(private apiService: ApiService) {
   }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(res => {
      this.items = res; 
    });
  }

  ngOnDestroy(): void{
    
  }

}
