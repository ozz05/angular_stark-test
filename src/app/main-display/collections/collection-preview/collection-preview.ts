import { Component, Input } from '@angular/core';
import { type PreviewData } from '../../previewData.model';

@Component({
  selector: 'app-collection-preview',
  imports: [],
  templateUrl: './collection-preview.html',
  styleUrl: './collection-preview.css'
})
export class CollectionPreview {
  @Input ({required: true}) previewData!:PreviewData;
}
