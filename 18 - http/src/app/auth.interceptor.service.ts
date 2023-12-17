import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthInterceptor implements HttpInterceptor {
  // The intercept method is required for implementing the HttpInterceptor interface
  intercept(
    req: HttpRequest<any>, // The outgoing request object to handle
    next: HttpHandler // The next interceptor in the chain or the backend if no interceptors remain
    // This function must return an Observable
  ): Observable<HttpEvent<any>> {
    console.log('req is on the way madafaka🤪🤪'); // Log message for debugging
    // add headers to request
    const modifyReq = req.clone({ headers: req.headers.append('auth', 'xyz') });
    // Forward the request to the next handler
    return next.handle(modifyReq).pipe(
      tap((event) => {
        console.log(event);
        if (event.type === HttpEventType.Response) {
          console.log('res arrived');
          console.log(event.body);
        }
      })
    );
  }
}
