import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  searchTerm: string = '';

  @Output() searchChanged = new EventEmitter<string>();

  onSearchChange() {
    this.searchChanged.emit(this.searchTerm);
  }
}
