import { Component } from '@angular/core';
import {Cards} from "../main/main.interface";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  public selectedCategories: string[] = ['Все'];
  public categorylist: string[] = ['Все', 'Здоровье', 'Спорт', 'Питание', 'Обучение и развитие', 'Семья', 'Комфорт и удобства', 'Прочие'];


  public mostPopularCards: Cards[] = [
    {
      code: 1,
      image: 'assets/images/main/Image.jpg',
      title: 'Абонемент в спортзал',
      company: 'Invictus GO',
      companyLogo: 'assets/icons/main/company-logo1.svg',
      coins: 4,
      descriptionList: [
        'Доступ в клуб на Суюнбая 89б',
        'Без ограничений по времени',
        'Тренер за дополнительную плату',
        'Заморозка 5 дней',
        '1 гостевое посещение',
        'Действует 1 месяц с момента покупки'
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Спорт' // Категория
    },
    {
      code: 2,
      image: 'assets/images/main/Image1.jpg',
      title: 'Абонемент в бассейн',
      company: 'Aqua Stars',
      companyLogo: 'assets/icons/main/company-logo2.svg',
      coins: 3,
      descriptionList: [
        'Доступ в клуб на Суюнбая 89б',
        'Без ограничений по времени',
        'Тренер за дополнительную плату',
        'Заморозка 5 дней',
        '1 гостевое посещение',
        'Действует 1 месяц с момента покупки'
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Спорт' // Категория
    },
    {
      code: 3,
      image: 'assets/images/main/Image2.jpg',
      title: 'Almaty Parking',
      company: 'Almaty Parking',
      companyLogo: 'assets/icons/main/company-logo3.svg',
      coins: 5,
      descriptionList: [
        'Доступ в клуб на Суюнбая 89б',
        'Без ограничений по времени',
        'Тренер за дополнительную плату',
        'Заморозка 5 дней',
        '1 гостевое посещение',
        'Действует 1 месяц с момента покупки'
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Комфорт и удобства' // Категория
    },
    {
      code: 1,
      image: 'assets/images/main/Image3.jpg',
      title: 'Абонемент на йогу',
      company: 'ВОЗДУХ',
      companyLogo: 'assets/icons/main/company-logo4.svg',
      coins: 4,
      descriptionList: [
        'Доступ в клуб на Суюнбая 89б',
        'Без ограничений по времени',
        'Тренер за дополнительную плату',
        'Заморозка 5 дней',
        '1 гостевое посещение',
        'Действует 1 месяц с момента покупки'
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Спорт' // Категория
    },
    {
      code: 2,
      image: 'assets/images/main/Image4.jpg',
      title: 'Стоматологические услуги',
      company: 'Dobro Dent',
      companyLogo: 'assets/icons/main/company-logo5.svg',
      coins: 3,
      descriptionList: [
        'Доступ в клуб на Суюнбая 89б',
        'Без ограничений по времени',
        'Тренер за дополнительную плату',
        'Заморозка 5 дней',
        '1 гостевое посещение',
        'Действует 1 месяц с момента покупки'
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Здоровье' // Категория
    },
    {
      code: 3,
      image: 'assets/images/main/Image5.jpg',
      title: 'Коворкинг',
      company: 'Most Hub',
      companyLogo: 'assets/icons/main/company-logo6.svg',
      coins: 5,
      descriptionList: [
        'Доступ в клуб на Суюнбая 89б',
        'Без ограничений по времени',
        'Тренер за дополнительную плату',
        'Заморозка 5 дней',
        '1 гостевое посещение',
        'Действует 1 месяц с момента покупки'
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Комфорт и удобства' // Категория
    }
  ];

  public recommendationsCards: Cards[] = [
    {
      code: 1,
      image: 'assets/images/main/Image3.jpg',
      title: 'Абонемент на йогу',
      company: 'ВОЗДУХ',
      companyLogo: 'assets/icons/main/company-logo4.svg',
      coins: 4,
      descriptionList: [
        'Доступ в клуб на Суюнбая 89б',
        'Без ограничений по времени',
        'Тренер за дополнительную плату',
        'Заморозка 5 дней',
        '1 гостевое посещение',
        'Действует 1 месяц с момента покупки'
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Спорт' // Категория
    },
    {
      code: 2,
      image: 'assets/images/main/Image4.jpg',
      title: 'Стоматологические услуги',
      company: 'Dobro Dent',
      companyLogo: 'assets/icons/main/company-logo5.svg',
      coins: 3,
      descriptionList: [
        'Доступ в клуб на Суюнбая 89б',
        'Без ограничений по времени',
        'Тренер за дополнительную плату',
        'Заморозка 5 дней',
        '1 гостевое посещение',
        'Действует 1 месяц с момента покупки'
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Здоровье' // Категория
    },
    {
      code: 3,
      image: 'assets/images/main/Image5.jpg',
      title: 'Коворкинг',
      company: 'Most Hub',
      companyLogo: 'assets/icons/main/company-logo6.svg',
      coins: 5,
      descriptionList: [
        'Доступ в клуб на Суюнбая 89б',
        'Без ограничений по времени',
        'Тренер за дополнительную плату',
        'Заморозка 5 дней',
        '1 гостевое посещение',
        'Действует 1 месяц с момента покупки'
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Комфорт и удобства' // Категория
    }
  ];

  get filteredMostPopularCards(): Cards[] {
    return this.filterCards(this.mostPopularCards);
  }


  public filterCards(cards: Cards[]): Cards[] {
    if (this.selectedCategories.length === 0 || this.selectedCategories.includes('Все')) {
      return cards;
    }
    return cards.filter(card => this.selectedCategories.includes(card.category));
  }

  public toggleCategory(category: string) {
    if (category === 'Все') {
      this.selectedCategories = this.selectedCategories.includes('Все') ? [] : ['Все'];
    } else {
      const index = this.selectedCategories.indexOf(category);
      if (index >= 0) {
        this.selectedCategories.splice(index, 1);
      } else {
        this.selectedCategories.push(category);
        this.selectedCategories = this.selectedCategories.filter(cat => cat !== 'Все');
      }
    }
  }

  public isCategorySelected(category: string): boolean {
    return this.selectedCategories.includes(category);
  }

}
