import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LoggingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('second intercept');
    return next.handle(req).pipe(
      tap((event) => {
        console.log(event); // Logging the HttpEvent

        // Specifically logging the response body when the HttpEvent is of type Response
        if (event.type === HttpEventType.Response) {
          console.log('res arrived'); // Logging when the response is received
          console.log(event.body); // Logging the response body
        }
      })
    );
  }
}
