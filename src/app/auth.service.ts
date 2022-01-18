import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './login/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL: string = environment.apiURL + 'api/user';
  tokenURL: string = environment.apiURL + environment.getUrlToken;
  customerId: string = environment.customerId;
  customerSecret: string = environment.customerSecret;
  jwtHelper:JwtHelperService = new JwtHelperService;

  constructor(private http: HttpClient) {}

  getToken(){
    const tokenString = localStorage.getItem('access_token');
    if(tokenString){
      const token = JSON.parse(tokenString).access_token;
      return token;
    }
    return null;
  }

  logOut(){
    localStorage.removeItem('access_token');
  }

  getAuthenticatedUser(){
    const token = this.getToken();
    if (token) {
      const user = this.jwtHelper.decodeToken(token).user_name;
      return user;
    }
    return null;
  }

  isAuthenticated(): boolean{
    const token = this.getToken();
    if (token) {
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }
  save(user: User): Observable<any> {
    return this.http.post(this.apiURL, user);
  }

  tryToLogin(username: string, password: string) : Observable<any>{

    const params = new HttpParams()
    .set('username', username)
    .set('password', password)
    .set('grant_type', password)

    const headers = {
      'Authorization': 'Basic' + btoa(`${this.customerId}:${this.customerSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded' + btoa(`${this.customerId}:${this.customerSecret}`)
    }

    return this.http.post(this.tokenURL, params.toString(), {headers});
  }
}
