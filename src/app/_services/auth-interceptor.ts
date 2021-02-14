// Auth-Interceptor//
// The Basic Authentication Interceptor intercepts http requests from the application to add basic authentication
// credentials to the Authorization header if the user is logged in.

import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';



import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  /**
   *
   */
  constructor(private auth: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with basic auth credentials if available

    req = req.clone({
      setHeaders: {
        'Authorization': this.auth.getToken()
      }
    });

    return next.handle(req);
  }
}