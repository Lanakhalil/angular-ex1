import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  activeItemIndex = 0;
  items=["My Cart", "Products", "About", "Contact us"]

  setActive(index: number) {
    this.activeItemIndex = index;
  }
}
