import { NgModule } from '@angular/core'; // {}
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListingComponent } from './product-listing/product-listing.component';

const routes: Routes = [
  //routing
  {path: 'observables',component: CartComponent},
  {path:'product',component: ProductListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
