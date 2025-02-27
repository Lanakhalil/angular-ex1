import { Component } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {
  items = [
    {
      img: "assets/icons/mugitem.png",
      price: "30$",
      title: "Mug"

    },
    {
      img: "assets/icons/shoesitem.png",
      price: "90$",
      title: "Shoes"
    },
    {
      img: "assets/icons/caseitem.png",
      price: "12$",
      title: "Phone Case"
    }
  ]

  cartItems: any[] = [];
  isCartExpanded = false;

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  toggleCart() {
    this.isCartExpanded = !this.isCartExpanded;
  }
}
