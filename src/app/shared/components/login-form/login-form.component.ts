import {Component, OnInit} from '@angular/core';
import {InputComponent} from "../inputs/input/input.component";
import {PasswordComponent} from "../inputs/password/password.component";
import {PrimaryButtonComponent} from "../buttons/primary-button/primary-button.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    InputComponent,
    PasswordComponent,
    PrimaryButtonComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {
  authForm!: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this._createAuthForm();
  }

  private _createAuthForm() {
    this.authForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }


}
