import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  items: Product[];

  constructor(private apiService: ApiService) {
   }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(res => {
      this.items = res; 
    });
  }

}
