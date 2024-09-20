import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {LoginService} from "../layout/login/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('authToken');

    // Добавляем access-токен в заголовки
    if (accessToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }

    return next.handle(req).pipe(
      catchError(error => {
        // Если получаем 401, пытаемся обновить токен
        if (error.status === 401 && localStorage.getItem('refreshToken')) {
          return this.loginService.refreshAccessToken().pipe(
            switchMap(() => {
              const newAccessToken = localStorage.getItem('authToken');
              if (newAccessToken) {
                // Обновляем запрос с новым access-токеном
                req = req.clone({
                  setHeaders: {
                    Authorization: `Bearer ${newAccessToken}`
                  }
                });
                return next.handle(req);
              } else {
                return throwError(error);
              }
            })
          );
        } else {
          return throwError(error);
        }
      })
    );
  }
}
