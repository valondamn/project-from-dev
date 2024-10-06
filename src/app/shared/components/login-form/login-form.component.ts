import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from "../../../layout/login/login.service";
import {PasswordComponent} from "../inputs/password/password.component";
import {InputComponent} from "../inputs/input/input.component";
import {PrimaryButtonComponent} from "../buttons/primary-button/primary-button.component";
import {NgIf} from "@angular/common";
import {MessageService} from 'primeng/api'; // Импорт MessageService
import {ToastModule} from 'primeng/toast'; // Импорт ToastModule

@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [
    PasswordComponent,
    InputComponent,
    ReactiveFormsModule,
    PrimaryButtonComponent,
    NgIf,
    ToastModule
  ],
  providers: [MessageService] // Добавление MessageService в провайдеры компонента
})
export class LoginFormComponent implements OnInit {
  authForm!: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private messageService: MessageService // Внедрение MessageService
  ) {
  }

  ngOnInit() {
    this._createAuthForm();
  }

  onSubmit() {
    if (this.authForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Ошибка',
        detail: 'Пожалуйста, заполните оба поля.',
      });
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const {username, password} = this.authForm.value;

    this.loginService.login({username, password}).subscribe({
      next: (response: any) => {
        const authToken = response.access; // Получите токен из ответа
        if (authToken) {
          this.loginService.setAuthToken(authToken); // Сохраните токен
          this.messageService.add({
            severity: 'success',
            summary: 'Успех',
            detail: 'Вы успешно вошли в систему!',
          });

          // Загрузить профиль пользователя после успешного входа
          this.loginService.fetchUserProfile().subscribe({
            next: () => {
              this.router.navigate(['/main']); // Перенаправить после успешного логина
            },
            error: (profileError) => {
              this.messageService.add({
                severity: 'error',
                summary: 'Ошибка профиля',
                detail: 'Не удалось загрузить профиль пользователя. Пожалуйста, попробуйте снова.',
              });
            },
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Ошибка',
            detail: 'Не удалось получить токен. Повторите попытку позже.',
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Ошибка',
          detail: 'Неправильный логин или пароль. Пожалуйста, попробуйте еще раз.',
        });
      },
    });
  }


  private _createAuthForm() {
    this.authForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}
