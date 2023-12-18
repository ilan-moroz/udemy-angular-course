import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  singUpUrl =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA98UeXOuQGR9PZaxfirTYJcs0YiuEGtlo';

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post(this.singUpUrl, {
      email,
      password,
      returnSecureToken: true,
    });
  }
}
