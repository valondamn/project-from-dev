import {Component, OnInit} from '@angular/core';
import {LoginFormComponent} from "../../shared/components/login-form/login-form.component";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }


}
