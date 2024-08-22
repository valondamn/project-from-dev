import {Component, input, OnInit} from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {HeaderComponent} from "../header/header.component";
import {Tab} from "../../../shared/interfaces/tab.interface";
import {Router, RouterOutlet} from "@angular/router";
import {ActivatedRoute} from '@angular/router';

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
export class PageComponent implements OnInit{
  type = input.required<string>();


  ngOnInit() {
    const storedTabLink = localStorage.getItem('currentTab');
    const tab = this.tabs.find(t => t.link === storedTabLink) || this.tabs[0];
    this.changeCurrentTab(tab);
  }

  changeCurrentTab(tab: Tab) {
    this.currentTab = tab;
    localStorage.setItem('currentTab', tab.link);
    this.router.navigate([`/${tab.link}`]);
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,

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



  setCurrentTab() {
    let tab =
      this.tabs.find((item) => item.link === this.type()) || this.tabs[0];
    this.changeCurrentTab(tab);
  }

}
