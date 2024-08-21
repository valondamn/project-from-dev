import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {HeaderComponent} from "../header/header.component";
import {Tab} from "../../../shared/interfaces/tab.interface";
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  standalone: true,

  imports: [
    SidebarComponent,
    HeaderComponent,
    RouterOutlet
  ]
})
export class PageComponent {

  constructor(
    private router: Router,
  ) {}

  public tabs: Tab[] =[
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
  ]

  currentTab: Tab = this.tabs[0];


  navigate(tab: Tab) {
    this.router.navigate([
      `/${tab.link}`,
    ]);
  }
}
