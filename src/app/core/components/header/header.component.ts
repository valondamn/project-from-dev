import { Component } from '@angular/core';
import {InputComponent} from "../../../shared/components/input/input.component";
import {NotificationsComponent} from "../../../shared/components/notifications/notifications.component";
import {CoinsComponent} from "../../../shared/components/coins/coins.component";
import {SvgIconComponent} from "angular-svg-icon";
import {HeaderMenuComponent} from "../header-menu/header-menu.component";

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
    HeaderMenuComponent
  ]
})
export class HeaderComponent {
  isDropdownVisible = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  closeDropdown() {
    this.isDropdownVisible = false;
  }
}
