import { Component } from '@angular/core';
import {AccordionCard} from "../../shared/interfaces/accordion-card.interface";

@Component({
  selector: 'app-questions-and-answers',
  templateUrl: './questions-and-answers.component.html',
  styleUrls: ['./questions-and-answers.component.scss']
})
export class QuestionsAndAnswersComponent {

  public accordionCards: AccordionCard[] = [
    {
      title: 'Как я могу зарегистрироваться на платформе гибких льгот?',
      content:"Полный список доступных льгот можно найти в разделе «Каталог льгот» на платформе.",
      active: false,
      iconActive: false,
    },
    {
      title: 'Какие льготы я могу выбрать через платформу?',
      content:"Полный список доступных льгот можно найти в разделе «Каталог льгот» на платформе.",
      active: false,
      iconActive: false,
    },
    {
      title: 'Как я могу проверить состояние своих льгот и остаток средств?',
      content:"Полный список доступных льгот можно найти в разделе «Каталог льгот» на платформе.",
      active: false,
      iconActive: false,
    },
    {
      title: 'Что такое коины на платформе гибких льгот?',
      content:"Полный список доступных льгот можно найти в разделе «Каталог льгот» на платформе.",
      active: false,
      iconActive: false,
    },
    {
      title: 'Сколько коинов я получаю и как часто?',
      content:"Полный список доступных льгот можно найти в разделе «Каталог льгот» на платформе.",
      active: false,
      iconActive: false,
    },    {
      title: 'Как мне использовать свои коины?',
      content:"Полный список доступных льгот можно найти в разделе «Каталог льгот» на платформе.",
      active: false,
      iconActive: false,
    },
    {
      title: 'Могу ли я накопить коины на следующий период, если не использую все в текущем?',
      content:"Полный список доступных льгот можно найти в разделе «Каталог льгот» на платформе.",
      active: false,
      iconActive: false,
    },
    {
      title: 'Могу ли я использовать льготы для членов моей семьи?',
      content:"Полный список доступных льгот можно найти в разделе «Каталог льгот» на платформе.",
      active: false,
      iconActive: false,
    },
    {
      title: 'Что делать, если я забыл свой пароль?',
      content:"Полный список доступных льгот можно найти в разделе «Каталог льгот» на платформе.",
      active: false,
      iconActive: false,
    },
    {
      title: 'Как обновить свои личные данные \n' +
        'на платформе?',
      content:"Полный список доступных льгот можно найти в разделе «Каталог льгот» на платформе.",
      active: false,
      iconActive: false,
    }
    ]

}
