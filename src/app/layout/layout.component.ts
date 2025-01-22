import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RandomService } from '../service/random.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})

// {} [] *

export class LayoutComponent {

  newRefresh= Inject(RandomService);

  

  loggedUserData: any;
  constructor(){
    const loggedData = localStorage.getItem("userInfo");
    if(loggedData != null){
      this.loggedUserData = JSON.parse(loggedData);
    }
  } 

  router = inject(Router)
  logOut(){
    this.router.navigateByUrl('login');
    localStorage.removeItem('userInfo');
  }
}
