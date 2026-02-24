import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable()
export class MockAuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('/api/auth/login') && req.method === 'POST') {
      return of(
        new HttpResponse({
          status: 200,
          body: {
            accessToken: 'mock-access-token',
            refreshToken: 'mock-refresh-token',
            expiresIn: 3600,
            user: {
              id: '1',
              email: req.body.email,
              roles: ['ADMIN'],
              permissions: ['CREATE_PRODUCT', 'DELETE_PRODUCT'],
            },
          },
        }),
      ).pipe(delay(800));
    }

    return next.handle(req);
  }
}
