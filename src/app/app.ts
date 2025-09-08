import { Component, signal } from '@angular/core';
import { TopMenu } from "./top-menu/top-menu";
import { SideMenu } from "./side-menu/side-menu";
import { MainDisplay } from "./main-display/main-display";

@Component({
  selector: 'app-root',
  imports: [TopMenu, SideMenu, MainDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedMenuItemID = "home";
  protected readonly title = signal('stark-test');

  onSelectedMenuItem(id:string)
  {
    this.selectedMenuItemID = id;
  }
}


