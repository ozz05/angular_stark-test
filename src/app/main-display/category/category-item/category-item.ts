import { Component, Input } from '@angular/core';
import {type Category} from '../../category.model';
import { menuCategories } from '../../../categories-menu';

@Component({
  selector: 'app-category-item',
  imports: [],
  templateUrl: './category-item.html',
  styleUrl: './category-item.css'
})
export class CategoryItem {
  @Input({required:true}) categoryData!:Category;

  get categoryFromID()
  {
    const category = menuCategories.find(c => c.id === this.categoryData.categoryID);
    return category?.label;
  }
}
