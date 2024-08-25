import { Component } from '@angular/core';
import {SvgIconComponent} from "angular-svg-icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    SvgIconComponent,
    RouterLink
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

}
