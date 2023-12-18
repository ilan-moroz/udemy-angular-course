import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      // Take the latest user value from authService's user Subject and complete
      take(1),
      // Use exhaustMap to wait for the user Observable to complete
      exhaustMap((user) => {
        if (!user) return next.handle(req);
        const modReq = req.clone({
          params: new HttpParams().set('auth', user.token),
        });
        return next.handle(modReq);
      })
    );
  }
}
