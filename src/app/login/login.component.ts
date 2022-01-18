import { User } from './user';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;
  loginError!: boolean;
  signingUp!: boolean;
  successMessage!: any;

  constructor( private router: Router, private authService: AuthService) { }

  onSubmit(){
    this.router.navigate(['/home']);
  }

  prepareRegister(event: { preventDefault: () => void; }){
    event.preventDefault();
    this.signingUp = true;
  }

  cancelRegister(){
    this.signingUp= false;
  }

  register(){
    const user: User = new User();
    user.username = this.username;
    user.password = this.password;

    this.authService
      .save(user)
      .subscribe(response => {
        this.successMessage = 'Successfully registered!'
        this.loginError = false;
      },error =>{
        this.loginError = true;
        this.successMessage = null;
      }
    )}
}
