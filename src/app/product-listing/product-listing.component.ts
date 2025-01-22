import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  standalone: false,
  
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.css'
})


export class ProductListingComponent {

  constructor(private http : HttpClient){
    this.getUser();
  }
  getUser(){
    this.http.get('https://projectapi.gerasim.in/api/UserApp/GetAllUsers').subscribe((Res:any)=>{
      
    })
  }

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
