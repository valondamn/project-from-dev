import { Component } from '@angular/core';
import {InputComponent} from "../../../shared/components/input/input.component";
import {NotificationsComponent} from "../../../shared/components/notifications/notifications.component";
import {CoinsComponent} from "../../../shared/components/coins/coins.component";
import {SvgIconComponent} from "angular-svg-icon";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    InputComponent,
    NotificationsComponent,
    CoinsComponent,
    SvgIconComponent
  ]
})
export class HeaderComponent {

}
