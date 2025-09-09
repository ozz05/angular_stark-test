import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from "./menu-item/menu-item";
import { SearchBar } from "./search-bar/search-bar";
import { MenuItemContainer } from "./menu-item-container/menu-item-container";



@Component({
  selector: 'app-side-menu',
  imports: [MenuItem, SearchBar, MenuItemContainer],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})

export class SideMenu {
  @Input({required: true}) selectedItem!:string;
  @Output() menuItemSelected = new EventEmitter<string>();

  get activeItem()
  {
    return this.selectedItem;
  }
  
  onMenuItemSelected(id:string)
  {
    this.menuItemSelected.emit(id);
  }
}
