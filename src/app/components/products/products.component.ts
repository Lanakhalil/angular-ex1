import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule]
})

export class ProductsComponent {
  ngOnInit() {
    console.log("ProductsComponent loaded"); // Check if this appears in the console
  }

  constructor(private router: Router) {}
  
  @Output() itemAdded = new EventEmitter<any>();
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

  addToCart(item: any) {
  //  this.itemAdded.emit(item); // Sends item to CartComponent
  this.router.navigate(['/my-cart'], { queryParams: { item: JSON.stringify(item) } });

  }

  
  

}
