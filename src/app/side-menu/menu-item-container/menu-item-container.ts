import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item';
import { menuCategories } from './categories';
@Component({
  selector: 'app-menu-item-container',
  imports: [MenuItem],
  templateUrl: './menu-item-container.html',
  styleUrl: './menu-item-container.css'
})

export class MenuItemContainer {
  @Input({required: true}) id!: string;
  @Input({required: true}) label!: string;
  @Input({required: true}) selectedItemID!: string;
  @Input({required: false}) active = false;
  categories = menuCategories;
  itemID = "";
  @Output() clicked = new EventEmitter<string>();

  onActivated()
  {
    this.active = !this.active;
  }

  onClicked(id:string): void{
    this.itemID = id;
    this.clicked.emit(id)
  }
}
