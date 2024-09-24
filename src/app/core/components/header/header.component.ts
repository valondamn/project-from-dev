import {Component, OnInit} from '@angular/core';
import {InputComponent} from '../../../shared/components/input/input.component';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';
import {CoinsComponent} from '../../../shared/components/coins/coins.component';
import {SvgIconComponent} from 'angular-svg-icon';
import {HeaderMenuComponent} from '../header-menu/header-menu.component';
import {HeaderService} from '../../services/header.service';
import {PrimaryButtonComponent} from "../../../shared/components/buttons/primary-button/primary-button.component";
import {LoginService} from "../../../layout/login/login.service";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    InputComponent,
    NotificationsComponent,
    CoinsComponent,
    SvgIconComponent,
    HeaderMenuComponent,
    PrimaryButtonComponent,
    AsyncPipe,
    NgIf
  ],
})
export class HeaderComponent implements OnInit {
  isMenuVisible: boolean = false;
  public purchaseSuccessModalVisible: boolean = false;
  public modalVisible: boolean = false;
  userProfile$ = this.loginService.userProfile$;


  constructor(public headerService: HeaderService,
              private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.loginService.checkAndRefreshToken().subscribe({
      next: (isSuccess: boolean) => {
        if (!isSuccess) {
          this.loginService.logout();  // Разлогинить пользователя, если не удалось обновить токен
        } else {
          this.loginService.fetchUserProfile().subscribe();  // Загрузить профиль после успешного обновления токена
        }
      },
      error: (err) => {
        console.error('Ошибка при проверке токена:', err);
        this.loginService.logout();
      }
    });
  }

  changeIsShown(visible: boolean) {
    this.isMenuVisible = visible;
  }

  public confirmPurchase() {
    this.modalVisible = false;
    this.purchaseSuccessModalVisible = true;
  }

  public openModal() {
    this.modalVisible = true;
  }

  public closeSuccessModal() {
    this.purchaseSuccessModalVisible = false;
  }

  public closeConfirmPurchase() {
    this.modalVisible = false;
  }
}
