import { Component } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  standalone: false,
  
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.css'
})
export class ProductListingComponent {
  isAdded: boolean = false;

  closeNewPanel() {
    this.isAdded = false;
  }

  openNewPanel() {
    this.isAdded = true;
  }
}

export class Product {
  
}
