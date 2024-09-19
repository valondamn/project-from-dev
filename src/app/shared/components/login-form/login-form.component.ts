import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from "../../../layout/login/login.service";
import {PasswordComponent} from "../inputs/password/password.component";
import {InputComponent} from "../inputs/input/input.component";
import {PrimaryButtonComponent} from "../buttons/primary-button/primary-button.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html',
  imports: [
    PasswordComponent,
    InputComponent,
    ReactiveFormsModule,
    PrimaryButtonComponent,
    NgIf
  ],
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {
  authForm!: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this._createAuthForm();
  }

  onSubmit() {
    if (this.authForm.invalid) {
      this.errorMessage = 'Please fill in both fields.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const {username, password} = this.authForm.value;

    this.loginService.login({username, password}).subscribe({
      next: (response: any) => {
        // Предполагаем, что ответ содержит токен
        const authToken = response.token;  // Получите токен из ответа
        this.loginService.setAuthToken(authToken);  // Сохраните токен
        this.router.navigate(['/main']);  // Перенаправить после успешного логина
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Login failed', error);
        this.errorMessage = 'Invalid username or password';
        this.isLoading = false;
      }
    });
  }

  private _createAuthForm() {
    this.authForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}
