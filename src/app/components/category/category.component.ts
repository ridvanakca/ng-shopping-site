import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {


  categories: Category[];
  selectedCategory: Category;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }


  getCategories() {
    this.categoryService.getCategories().subscribe(res => this.categories = res);
  }

  onSelect(category: Category) {
    if(category) {
      this.selectedCategory = category;
    }
    else {
      this.selectedCategory = null;
    }
  }
}
