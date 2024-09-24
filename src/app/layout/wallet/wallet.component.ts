import {Component, OnInit} from '@angular/core';
import {NgStyle} from "@angular/common";
import {User} from "../main/main.interface";
import {BenefitsCardsComponent} from "../../shared/components/benefits-cards/benefits-cards.component";
import {CoinsComponent} from "../../shared/components/coins/coins.component";
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [
    NgStyle,
    BenefitsCardsComponent,
    CoinsComponent
  ],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent implements OnInit {

  userProfile!: User; // Для хранения данных профиля


  constructor(
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.fetchUserProfile();

  }

  fetchUserProfile() {
    this.loginService.getProfile().subscribe({
      next: (profile: User) => {
        this.userProfile = profile;  // Получаем данные профиля
      }
    });
  }
}
