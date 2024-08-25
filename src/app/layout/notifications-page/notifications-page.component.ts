import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";
import {NotificationCardsComponent} from "../../shared/components/notification-cards/notification-cards.component";

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [
    NgStyle,
    NotificationCardsComponent
  ],
  templateUrl: './notifications-page.component.html',
  styleUrl: './notifications-page.component.scss'
})
export class NotificationsPageComponent {

}
