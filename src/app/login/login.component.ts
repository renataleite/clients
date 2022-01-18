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
  errors!: string[];
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
        this.successMessage = 'Successfully registered!',
        this.signingUp = false;
        this.username = '';
        this.password = '';
        this.errors = [];
      },errorResponse =>{
        this.errors = errorResponse.error.errors;
        this.successMessage = null;
      }
    )}
}
