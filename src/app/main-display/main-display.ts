import { Component, Input } from '@angular/core';
import { CategoryDisplay } from './category/category-display/category-display';
import { CollectionDisplay } from './collections/collection-display/collection-display';
import { CategoryPreview } from './category/category-preview/category-preview';
import { CollectionPreview } from './collections/collection-preview/collection-preview';

const PreviewData = [
  {
    id: "1",
    title:"New in the Library",
    description: "Newly added accessibility resources, guides, and more.",
    collection:false
  },
  {
    id: "2",
    title:"Featured Collections",
    description: "Handpicked and curated collections around accessibility.",
    collection:true
  }
]

@Component({
  selector: 'app-main-display',
  imports: [CategoryPreview, CollectionPreview, CategoryDisplay, CollectionDisplay],
  templateUrl: './main-display.html',
  styleUrl: './main-display.css'
})



export class MainDisplay {
    @Input({required: true}) selectedItem!:string;
    previewData = PreviewData;

}
