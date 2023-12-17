import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  // Implementing the HttpInterceptor interface's intercept method
  intercept(
    req: HttpRequest<any>, // The incoming HttpRequest object
    next: HttpHandler // The next HttpHandler in the chain
  ): Observable<HttpEvent<any>> {
    console.log('req is on the way madafaka🤪🤪'); //  log when a request is intercepted

    // Cloning the HttpRequest and appending a new header 'auth' with value 'xyz'
    const modifyReq = req.clone({ headers: req.headers.append('auth', 'xyz') });

    // Handling the modified request, and using tap to log HttpEvents
    return next.handle(modifyReq);
  }
}
