import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LoginService} from '../../layout/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(): boolean {
    if (this.loginService.isAuthenticated()) {
      // Если пользователь авторизован, перенаправляем его на главную страницу
      this.router.navigate(['/main']);
      return false;
    }
    return true; // Если не авторизован, разрешаем доступ к странице логина
  }
}
