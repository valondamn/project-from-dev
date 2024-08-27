import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";
import {Cards} from "../main/main.interface";
import {BenefitsCardsComponent} from "../../shared/components/benefits-cards/benefits-cards.component";
import {CoinsComponent} from "../../shared/components/coins/coins.component";

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [
    NgStyle,
    BenefitsCardsComponent,
    CoinsComponent
  ],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {

  public cards: Cards[] = [
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
      category: 'Спорт',
      date: '24.09.24'
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
        'Действует 1 месяц с момента покупки'
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Спорт'
      ,      date: '24.09.24'
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
        'Действует 1 месяц с момента покупки'
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Комфорт и удобства'
      ,      date: '24.09.24'
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
        'Действует 1 месяц с момента покупки'
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Комфорт и удобства'
      ,      date: '24.09.24'
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
        'Действует 1 месяц с момента покупки'
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Комфорт и удобства'
      ,      date: '24.09.24'
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
        'Действует 1 месяц с момента покупки'
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Комфорт и удобства'
      ,      date: '24.09.24'
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
        'Действует 1 месяц с момента покупки'
      ],
      descriptionTitle: 'МЕСЯЦ FULL DAY',
      category: 'Комфорт и удобства'
      ,      date: '24.09.24'
// Категория
    },
  ];

}
