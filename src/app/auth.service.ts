import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './login/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURL +"api/user"

  constructor(
    private http: HttpClient
  ) { }

    save(user: User): Observable<any>{
      return this.http.post(this.apiURL, user)
    }
}
