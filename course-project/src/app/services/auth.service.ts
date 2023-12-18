import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from '../components/auth/user.model';

export interface AuthResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  singUpUrl =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA98UeXOuQGR9PZaxfirTYJcs0YiuEGtlo';
  loginUrl =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA98UeXOuQGR9PZaxfirTYJcs0YiuEGtlo';
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponse>(this.singUpUrl, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handAuth(
            resData.email,
            resData.idToken,
            +resData.expiresIn,
            resData.localId
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponse>(this.loginUrl, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handAuth(
            resData.email,
            resData.idToken,
            +resData.expiresIn,
            resData.localId
          );
        })
      );
  }

  private handAuth(
    email: string,
    token: string,
    expiresIn: number,
    id: string
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, id, token, expirationDate);
    this.user.next(user);
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg = 'An unknown error occurred';
    if (!err.error || !err.error.error)
      return throwError(() => new Error(errMsg));
    switch (err.error.error.message) {
      case 'EMAIL_EXISTS':
        errMsg = 'This email already exists';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errMsg =
          'Invalid login credentials. Please check your email and password.';
        break;
    }
    return throwError(() => new Error(errMsg));
  }
}
