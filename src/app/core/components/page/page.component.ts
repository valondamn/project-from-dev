import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {Tab} from "../../../shared/interfaces/tab.interface";
import {RouterOutlet} from "@angular/router";
import {NgStyle} from "@angular/common";
import {HeaderMenuComponent} from "../header-menu/header-menu.component";
import {SidebarComponent} from "../sidenav/sidenav.component";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  standalone: true,

  imports: [
    SidebarComponent,
    HeaderComponent,
    RouterOutlet,
    NgStyle,
    HeaderMenuComponent,
    SidebarComponent
  ]
})
export class PageComponent implements OnInit {
  public tabs: Tab[] = [
    {
      title: 'Главная',
      link: '',
      icon: '/assets/icons/tabs/home.svg'
    },
    {
      title: 'Действующие льготы',
      link: 'current-benefits',
      icon: '/assets/icons/tabs/current-benefits.svg'
    },
    {
      title: 'Каталог льгот',
      link: 'catalog',
      icon: '/assets/icons/tabs/catalog.svg'
    },
    {
      title: 'Вопросы и ответы',
      link: 'questions-and-answers',
      icon: '/assets/icons/tabs/questions-and-answers.svg'
    }
  ];
  currentTab: Tab = this.tabs[0];

  constructor() {
  }

  ngOnInit() {
  }


  // Новый метод для работы со страницами, не зависящими от табов


}
