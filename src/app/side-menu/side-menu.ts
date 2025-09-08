import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from "./menu-item/menu-item";

@Component({
  selector: 'app-side-menu',
  imports: [MenuItem],
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
