import { Component } from '@angular/core';
import {PrimaryButtonComponent} from "../../shared/components/buttons/primary-button/primary-button.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    PrimaryButtonComponent,
    FormsModule
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  firstName = '';
  lastName = '';
  email = '';
  phoneNumber = '';
  birthDate = '';
  country = '';
  gender = '';
  language = 'ru'; // Default to Russian

  saveProfile() {
    console.log('Profile saved', {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      birthDate: this.birthDate,
      country: this.country,
      gender: this.gender,
      language: this.language,
    });
  }
}
