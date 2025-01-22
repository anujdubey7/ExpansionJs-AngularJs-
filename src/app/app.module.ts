import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { CartComponent } from './cart/cart.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './form-2/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './form-2/template-form/template-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { tokenInterceptor } from './interceptor/token.interceptor';
import { AnimationComponent } from './animation/animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProductListingComponent,
    CartComponent,
    SearchBarComponent,
    LoginComponent,
    LayoutComponent,
    FormComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    SignUpComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, BrowserAnimationsModule,MatProgressBarModule
  ],
  providers: [provideHttpClient(withInterceptors([tokenInterceptor])), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
