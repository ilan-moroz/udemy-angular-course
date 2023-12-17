import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  // The intercept method is required for implementing the HttpInterceptor interface
  intercept(
    req: HttpRequest<any>, // The outgoing request object to handle
    next: HttpHandler // The next interceptor in the chain or the backend if no interceptors remain
    // This function must return an Observable
  ): Observable<HttpEvent<any>> {
    console.log('req is on the way madafaka🤪🤪'); // Log message for debugging
    const modifyReq = req.clone({ headers: req.headers.append('auth', 'xyz') });
    return next.handle(modifyReq); // Forward the request to the next handler (or the backend)
  }
}
