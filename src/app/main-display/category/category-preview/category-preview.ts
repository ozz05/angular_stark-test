import { Component, Input } from '@angular/core';
import { type PreviewData } from '../../previewData.model';
import { CategoriesData } from '../../CategoriesData';
import { CategoryItem } from '../category-item/category-item';

@Component({
  selector: 'app-category-preview',
  imports: [CategoryItem],
  templateUrl: './category-preview.html',
  styleUrl: './category-preview.css'
})

export class CategoryPreview {
  @Input ({required: true}) previewData!:PreviewData;
  categoryData = CategoriesData;
}
