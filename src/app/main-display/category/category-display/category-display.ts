import { Component, Input } from '@angular/core';
import { CategoriesData } from '../../CategoriesData';
import {type Category} from '../../category.model';
import { CategoryItem } from '../category-item/category-item';
import { menuCategories } from '../../../categories-menu';
import { DividerItem } from "../divider-item/divider-item";

@Component({
  selector: 'app-category-display',
  imports: [CategoryItem, DividerItem],
  templateUrl: './category-display.html',
  styleUrl: './category-display.css'
})

export class CategoryDisplay {
  @Input({required:true}) selectedItem!:string;
  categoryData = CategoriesData;

  get categoryFromID()
  {
    const category = menuCategories.find(c => c.id === this.selectedItem);
    return category?.label;
  }

  get categoryDescriptionFromID()
  {
    const category = menuCategories.find(c => c.id === this.selectedItem);
    return category?.description;
  }
}
