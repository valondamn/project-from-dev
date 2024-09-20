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
        const authToken = response.access;  // Получите токен из ответа
        if (authToken) {
          this.loginService.setAuthToken(authToken);  // Сохраните токен
        } else {
          console.error('Token is undefined');
        }
        this.router.navigate(['/main']);  // Перенаправить после успешного логина
        this.isLoading = false;
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
