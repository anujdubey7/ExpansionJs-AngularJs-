import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

// fetching data using api and then checking the user details and navigating them to route path and storing them in localStroage and if user logout then details is removed from localStorage and navigating them to login page

export class LoginComponent {
  userObj: {username: string, password: string} = {
    username: '',
    password: ''
  }
  router = inject(Router)
  http = inject(HttpClient)
  onLogin(){
      this.http.post("https://api.freeapi.app/api/v1/users/login", this.userObj).subscribe((res: any)=>{
        console.log(res);
      if(res.success){
        alert("Login Successful");
        const userInfo= {
          Username: res.data.user.username,
          EmailId : res.data.user.email,
          Role: res.data.user.role,
          AccessToken:  res.data.accessToken,
        };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        this.router.navigateByUrl('product');
      }
      else{
        alert(res.message || "Error occurred during login");
      }
    })
    
    

    // if(this.userObj.EmailId == 'dmanuj663@gmail.com' && this.userObj.Password == '1234'){
    //   alert("Login Successful")
    //   localStorage.setItem('userMail', this.userObj.EmailId)
    //   this.router.navigateByUrl('product')
    // }
    // else{
    //   alert("Not correct credentials")
    // }
  }
}
