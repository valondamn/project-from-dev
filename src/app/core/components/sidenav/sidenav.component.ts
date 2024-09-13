import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NgClass, NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {SvgIconComponent} from "angular-svg-icon";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({opacity: 0})),
      transition(':enter, :leave', [
        animate(300, style({opacity: 1})),
      ]),
    ]),
  ],
  imports: [
    NgClass,
    RouterLinkActive,
    MatIcon,
    NgIf,
    RouterLink,
    SvgIconComponent
  ],

  standalone: true
})
export class SidebarComponent implements OnInit {


  isSidebarVisible = true;
  isSubmenuOpen = true;
  isDashboardSelected = false;


  constructor() {
  }

  ngOnInit() {
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }


  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }


  selectDashboard() {
    this.isDashboardSelected = true;
  }
}
