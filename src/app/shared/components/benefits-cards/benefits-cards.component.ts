import {Component, Input} from '@angular/core';
import {BenefitsTop, Cards, User} from '../../../layout/main/main.interface';
import {SvgIconComponent} from 'angular-svg-icon';
import {PrimaryButtonComponent} from '../buttons/primary-button/primary-button.component';
import {CoinsComponent} from '../coins/coins.component';
import {ModalComponent} from '../modal/modal.component';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {DeadLineComponent} from '../dead-line/dead-line.component';
import {BenefitsService} from "../../services/benefits.service";
import {LoginService} from "../../../layout/login/login.service";
import {environment} from "../../../../enviroments/environment";

@Component({
  selector: 'app-benefits-cards',
  standalone: true,
  imports: [
    SvgIconComponent,
    PrimaryButtonComponent,
    CoinsComponent,
    DeadLineComponent,
    ModalComponent,
    NgIf,
    RouterLink,
  ],
  templateUrl: './benefits-cards.component.html',
  styleUrl: './benefits-cards.component.scss',
})
export class BenefitsCardsComponent {
  @Input() isLoading: boolean = true;
  @Input() cards!: Cards[];
  @Input() currentCards!: User;
  @Input() topBenefits!: BenefitsTop[];
  @Input() deadLine: boolean = false;
  @Input() isColumnCard: boolean = true;
  @Input() isLinkCard: boolean = false;
  public url = environment.serverURL; // Base URL

  public currentCard!: Cards;
  public modalVisible: boolean = false;
  public purchaseSuccessModalVisible: boolean = false;

  constructor(private benefitsService: BenefitsService,
              public loginService: LoginService) {
  }

  public confirmPurchase() {
    console.log('Покупка льготы с ID:', this.currentCard.id);

    this.benefitsService.purchaseBenefit(this.currentCard.id).subscribe({
      next: () => {
        this.modalVisible = false;
        this.purchaseSuccessModalVisible = true;

        // Обновляем профиль пользователя после успешной покупки
        this.loginService.fetchUserProfile().subscribe();
      },
      error: (error) => {
        console.error('Ошибка при покупке льготы', error);
        // Обработка ошибок
      }
    });
  }


  public openModal(card: Cards) {
    this.currentCard = card;
    this.modalVisible = true;
  }

  public closeSuccessModal() {
    this.purchaseSuccessModalVisible = false;
  }

  public closeConfirmPurchase() {
    this.modalVisible = false;
  }
}
