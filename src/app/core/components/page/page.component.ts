import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {HeaderComponent} from "../header/header.component";
import {Tab} from "../../../shared/interfaces/tab.interface";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  standalone: true,

  imports: [
    SidebarComponent,
    HeaderComponent
  ]
})
export class PageComponent {
  public tab: Tab[] =[
    {
      title: 'Главная',
      link: 'link',
      icon: '/assets/icons/tabs/home.svg'
    },
    {
      title: 'Действующие льготы',
      link: 'link',
      icon: '/assets/icons/tabs/current-benefits.svg'
    },
    {
      title: 'Каталог льгот',
      link: 'link',
      icon: '/assets/icons/tabs/catalog.svg'
    },
    {
      title: 'Вопросы и ответы',
      link: 'link',
      icon: '/assets/icons/tabs/questions-and-answers.svg'
    }
  ]
}
