import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface AuthResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  singUpUrl =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA98UeXOuQGR9PZaxfirTYJcs0YiuEGtlo';

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponse>(this.singUpUrl, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((err) => {
          let errMsg = 'An unknown error occurred';
          if (!err.error || !err.error.error)
            return throwError(() => new Error(errMsg));
          switch (err.error.error.message) {
            case 'EMAIL_EXISTS':
              errMsg = 'This email already exists';
          }
          return throwError(() => new Error(errMsg));
        })
      );
  }
}
