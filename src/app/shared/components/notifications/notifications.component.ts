import { Component } from '@angular/core';
import {SvgIconComponent} from "angular-svg-icon";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    SvgIconComponent
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

}
