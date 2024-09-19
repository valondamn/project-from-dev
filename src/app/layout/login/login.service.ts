import {Injectable} from '@angular/core';
import {environment} from "../../../enviroments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = `${environment.serverURL}/auth/login/`;
  private authUrl = `${environment.serverURL}/auth`;


  constructor(private http: HttpClient,
              private router: Router) {
  }


  login(credentials: { username: string, password: string }) {
    return this.http.post(this.url, credentials);
  }

  // Пример проверки токена (в реальном проекте обычно используется JWT токен)
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken'); // Если токен сохранен, считаем пользователя залогиненным
  }

  // Метод для сохранения токена после логина
  setAuthToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  // Метод для выхода
  logout() {
    localStorage.removeItem('authToken');  // Удалить токен из localStorage
    this.router.navigate(['/login']);  // Перенаправить на страницу логина
  }

  getProfile(): Observable<any> {
    return this.http.get(`${this.authUrl}/me/`);
  }
}
