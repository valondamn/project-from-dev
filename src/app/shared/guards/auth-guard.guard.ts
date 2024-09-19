import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LoginService} from "../../layout/login/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {
  }

  canActivate(): boolean {
    const isLoggedIn = this.loginService.isAuthenticated(); // Проверка аутентификации

    if (!isLoggedIn) {
      this.router.navigate(['/login']); // Если пользователь не залогинен, перенаправить на /login
      return false;
    }

    return true; // Пользователь залогинен, разрешаем доступ к маршруту
  }
}
