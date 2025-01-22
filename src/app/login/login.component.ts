import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userObj = {
    EmailId: '',
    password: ''
  };

  //condition for progressbar 
  isLoading = false;
  router = inject(Router);

  constructor(private http: HttpClient) { }

  onLogin() {
    this.isLoading = true;

    this.http.post('https://projectapi.gerasim.in/api/UserApp/login', this.userObj).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.result) {
          alert('Login Successful');
          const userInfo = {
            UserId: res.data.userId,
            EmailId: res.data.emailId
          };
          localStorage.setItem('userInfo', JSON.stringify(userInfo));
          localStorage.setItem('AccessToken', res.data.token);
          this.router.navigateByUrl('product');
        } 
      },
      error: () => {
        alert('An error occurred. Please try again.');
        this.isLoading =false;
      }
    });
  }
  // if(this.userObj.EmailId == 'dmanuj663@gmail.com' && this.userObj.Password == '1234'){
  //   alert("Login Successful")
  //   localStorage.setItem('userMail', this.userObj.EmailId)
  //   this.router.navigateByUrl('product')
  // }
  // else{
  //   alert("Not correct credentials")
  // }
}

