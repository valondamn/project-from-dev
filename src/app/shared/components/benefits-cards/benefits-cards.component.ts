import {Component, Input, OnInit} from '@angular/core';
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
export class BenefitsCardsComponent implements OnInit {
  @Input() isLoading: boolean = true;
  @Input() cards!: Cards[];
  @Input() currentCards!: User;
  @Input() topBenefits!: BenefitsTop[];
  @Input() deadLine: boolean = false;
  @Input() isColumnCard: boolean = true;
  @Input() isLinkCard: boolean = false;
  @Input() fontWeight: 'thin' | 'normal' = 'thin';
  @Input() type: 'catalog' | 'main' = 'main'
  public url = environment.serverURL;
  userProfile$ = this.loginService;

  public currentCard!: Cards;
  public modalVisible: boolean = false;
  public purchaseSuccessModalVisible: boolean = false;
  public purchaseFailedModalVisible: boolean = false;
  private userProfile!: User; // Добавляем свойство для хранения профиля пользователя

  constructor(
    private benefitsService: BenefitsService,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
    // Подписываемся на профиль пользователя
    this.loginService.getProfile().subscribe((profile) => {
      this.userProfile = profile;
    });
  }

  public confirmPurchase() {
    console.log('Покупка льготы с ID:', this.currentCard?.id);

    if (!this.userProfile) {
      console.error('Профиль пользователя не загружен');
      return;
    }

    if (!this.currentCard) {
      console.error('Текущая карта не определена');
      return;
    }

    if (this.currentCard.cost === undefined || this.currentCard.cost === null) {
      console.error('Стоимость текущей карты не определена');
      return;
    }

    if (this.userProfile.coins < this.currentCard.cost) {
      // Если коинов недостаточно, показываем модальное окно с сообщением
      this.modalVisible = false;
      this.purchaseFailedModalVisible = true;
    } else {
      // Если коинов достаточно, выполняем покупку
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
        },
      });
    }
  }


  public openModal(card: Cards) {
    this.currentCard = card;
    this.modalVisible = true;
  }

  public closeSuccessModal() {
    this.purchaseSuccessModalVisible = false;
    this.purchaseFailedModalVisible = false;
  }

  public closeConfirmPurchase() {
    this.modalVisible = false;
  }
}
