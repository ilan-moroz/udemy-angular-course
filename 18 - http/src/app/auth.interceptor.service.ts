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
  ): Observable<HttpEvent<any>> {
    // This function must return an Observable
    console.log('req is on the way madafaka🤪🤪'); // Log message for debugging
    return next.handle(req); // Forward the request to the next handler (or the backend)
  }
}
