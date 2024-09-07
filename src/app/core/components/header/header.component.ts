import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/components/input/input.component';
import { NotificationsComponent } from '../../../shared/components/notifications/notifications.component';
import { CoinsComponent } from '../../../shared/components/coins/coins.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { HeaderService } from '../../services/header.service';
import { PrimaryButtonComponent } from "../../../shared/components/buttons/primary-button/primary-button.component";

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
    PrimaryButtonComponent
],
})
export class HeaderComponent {
  isMenuVisible: boolean = false;
  public purchaseSuccessModalVisible: boolean = false;
  public modalVisible: boolean = false;

  constructor(public headerService: HeaderService) {}

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
