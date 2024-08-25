import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ExternalClickDirective} from "../../../shared/derivatives/external-click.directive";

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    ExternalClickDirective
  ],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
  @Input() isVisible: boolean = false;

}
