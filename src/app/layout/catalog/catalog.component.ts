import {Component, OnInit} from '@angular/core';
import {Benefits, Cards} from '../main/main.interface';
import {CatalogService} from "./catalog.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  public products!: Benefits;
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
      category: 'Спорт', // Категория
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
      category: 'Спорт', // Категория
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
      category: 'Комфорт и удобства', // Категория
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
        'Действует 1 месяц с момента покупки',
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Спорт', // Категория
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
      category: 'Здоровье', // Категория
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
      category: 'Спорт', // Категория
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
      category: 'Здоровье', // Категория
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
    },
  ];

  constructor(private catalogService: CatalogService) {
  }

  get filteredMostPopularCards(): Cards[] {
    return this.filterCards(this.mostPopularCards);
  }

  ngOnInit(): void {
    this.getCatalog()
  }

  public getCatalog() {
    this.catalogService.getBenefits().subscribe((prods: Benefits) => {
      this.products = prods
      console.log(prods)
    });

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
}
