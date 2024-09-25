import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject, map, Observable, of, switchMap} from "rxjs";
import {catchError, tap} from 'rxjs/operators';
import {User} from "../main/main.interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = `/api/auth/login/`;
  private authUrl = `/api/auth`;

  // BehaviorSubject для хранения данных профиля
  private userProfileSubject = new BehaviorSubject<any>(null);
  public userProfile$ = this.userProfileSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
  }

  isTokenExpired(token: string): boolean {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

// Метод для проверки, истек ли токен, и обновления его при необходимости
  checkAndRefreshToken(): Observable<boolean> {
    const accessToken = localStorage.getItem('authToken');
    if (accessToken && this.isTokenExpired(accessToken)) {
      return this.refreshAccessToken().pipe(
        map(() => true),
        catchError(() => of(false))
      );
    }
    return of(true);
  }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(this.url, credentials).pipe(
      tap((response: any) => {
        const authToken = response.access;
        const refreshToken = response.refresh;
        if (authToken) {
          this.setAuthToken(authToken); // Сохраняем access-токен
        } else {
          console.error('Access token is undefined');
        }
        if (refreshToken) {
          localStorage.setItem('refreshToken', refreshToken); // Сохраняем refresh-токен
        } else {
          console.error('Refresh token is undefined');
        }
      }),
      switchMap(() => this.fetchUserProfile()) // Загружаем профиль после логина
    );
  }


  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  setAuthToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  logout() {
    localStorage.removeItem('authToken');
    this.userProfileSubject.next(null); // Сбрасываем данные профиля при выходе
    this.router.navigate(['/login']);
  }

  fetchUserProfile(): Observable<User | null> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Пользователь не авторизован');
      this.router.navigate(['/login']);
      return of(null);
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<User>(`${this.authUrl}/me/`, {headers}).pipe(
      tap((profile: User) => {
        this.userProfileSubject.next(profile); // Сохраняем данные профиля
      }),
      catchError((error) => {
        console.error('Ошибка получения данных профиля:', error);
        if (error.status === 401 || error.status === 403) {
          this.logout(); // Выполняем выход только при 401 или 403
        } else {
          // Другие ошибки не приводят к выходу пользователя
          console.error('Ошибка не связана с авторизацией, пользователь не будет разлогинен.');
        }
        return of(null);
      })
    );
  }

  refreshAccessToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      // Если refresh-токена нет, разлогиниваем пользователя
      this.logout();
      return of(null);
    }

    return this.http.post(`${this.authUrl}/refresh/`, {refresh: refreshToken}).pipe(
      tap((response: any) => {
        const newAccessToken = response.access;
        if (newAccessToken) {
          this.setAuthToken(newAccessToken); // Обновляем access-токен в localStorage
          console.log('Access токен успешно обновлен');

        } else {
          console.error('New access token is undefined');
        }
      }),
      catchError((error) => {
        console.error('Ошибка обновления токена:', error);
        this.logout(); // Если не удалось обновить токен, разлогиниваем пользователя
        return of(null);
      })
    );
  }


  getProfile(): Observable<User> {
    return this.userProfile$; // Возвращаем Observable для подписки на данные профиля
  }
}
