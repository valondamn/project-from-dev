import { Component } from '@angular/core';
import { Cards } from '../main/main.interface';

@Component({
  selector: 'app-current-benefits',
  templateUrl: './current-benefits.component.html',
  styleUrls: ['./current-benefits.component.scss'],
})
export class CurrentBenefitsComponent {
  public selectedCategory: string = 'Все'; // "Все" selected by default
  public categorylist: string[] = [
    'Все',
    'Здоровье',
    'Спорт',
    'Питание',
    'Обучение и развитие',
    'Семья',
    'Комфорт и удобства',
    'Прочие',
  ];

  get filteredMostPopularCards(): Cards[] {
    return this.filterCards(this.mostPopularCards);
  }

  get filteredRecommendationsCards(): Cards[] {
    return this.filterCards(this.recommendationsCards);
  }

  public filterCards(cards: Cards[]): Cards[] {
    if (this.selectedCategory === 'Все') {
      return cards;
    }
    return cards.filter((card) => card.category === this.selectedCategory);
  }

  public toggleCategory(category: string) {
    this.selectedCategory = category;
  }

  public isCategorySelected(category: string): boolean {
    return this.selectedCategory === category;
  }

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
        'Действует 1 месяц с момента покупки',
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Спорт',
      date: '24.09.24',
      // Категория
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
        'Действует 1 месяц с момента покупки',
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Спорт',
      date: '24.09.24',
      // Категория
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
        'Действует 1 месяц с момента покупки',
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Комфорт и удобства',
      date: '24.09.24',
      // Категория
    },
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
        'Действует 1 месяц с момента покупки',
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Спорт',
      date: '24.09.24',
      // Категория
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
        'Действует 1 месяц с момента покупки',
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Здоровье',
      date: '24.09.24',
      // Категория
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
        'Действует 1 месяц с момента покупки',
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Комфорт и удобства', // Категория
      date: '24.09.24',
    },
  ];
}
