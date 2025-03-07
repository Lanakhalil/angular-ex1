import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-cart',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent {
 
  cartItems: any[] = [];
  isCartExpanded = false;

  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['item']) {
        const item = JSON.parse(params['item']);
        this.cartItems.push(item); // Add the item to the cart
      }
    });
  }

  toggleCart() {
    this.isCartExpanded = !this.isCartExpanded;
  }
}
