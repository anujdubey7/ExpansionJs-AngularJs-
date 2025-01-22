import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


// {} [] *
@Component({
  selector: 'app-sign-up',
  standalone: false,
  
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  router=  inject(Router)
  constructor(private http: HttpClient){
    
  }
  registerUser: any = {
    userId: 0,
    emailId: "",
    fullName: "",
    password: ""
  }

  onSignUp(){
    this.http.post("https://projectapi.gerasim.in/api/UserApp/CreateNewUser", this.registerUser).subscribe((res: any)=>{
      if(res.result){
        alert("Your Account is created!!!");
        this.router.navigateByUrl('login');
      }else{
        alert(res.message);
      }
    })
  }

}
