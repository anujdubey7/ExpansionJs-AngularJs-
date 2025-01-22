import { NgModule } from '@angular/core'; // {}
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './service/auth.guard';
import { childGuardGuard } from './service/child-guard.guard';
import { canMatchGuard } from './service/can-match.guard';
import { FormComponent } from './form/form.component';
import { FormDeactivateClassGuard } from './service/form-deactivate-class.guard';
import { TemplateFormComponent } from './form-2/template-form/template-form.component';
import { ReactiveFormComponent } from './form-2/reactive-form/reactive-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AnimationComponent } from './animation/animation.component';



// {} [] *
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component:SignUpComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: 'observables',
        component: CartComponent,
        //canActivate: [authGuard],
        //canActivateChild : [childGuardGuard]
      },
      {
        path:'product',
        component: ProductListingComponent,
        //canMatch: [canMatchGuard]
      },
      {
        path: 'form',
        component: FormComponent,
       // canDeactivate: [FormDeactivateClassGuard]
      },
      {
        path: 'template-form',
        component: TemplateFormComponent
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent
      },
      {
        path: 'animation',
        component: AnimationComponent
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
