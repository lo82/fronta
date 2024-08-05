import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthInterceptorServiceService implements HttpInterceptor{


  constructor(private token: TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token =  this.token.getToken();
    if (token) {
      return next.handle(req.clone({
        setHeaders: {
          Authorization:'Bearer ' + token
        }
      }))
    }
    return next.handle(req);

  }




}
