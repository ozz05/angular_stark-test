import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  imports: [],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css'
})
export class MenuItem {
  @Input({required: true}) id!: string;
  @Input({required: true}) label!: string;
  @Input({required: true}) selected!:boolean;
  @Output() clicked = new EventEmitter<string>();
  
  onClick(): void {
    this.clicked.emit(this.id);
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
