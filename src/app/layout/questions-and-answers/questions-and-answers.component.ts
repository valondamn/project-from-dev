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
      title: 'Какие льготы я могу выбрать через платформу?',
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
      title: 'Какие льготы я могу выбрать <br />через платформу?',
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
      title: 'Какие льготы я могу выбрать через платформу?',
      content:"Полный список доступных льгот можно найти в разделе «Каталог льгот» на платформе.",
      active: false,
      iconActive: false,
    },    {
      title: 'Какие льготы я могу выбрать через платформу?',
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
      title: 'Какие льготы я могу выбрать через платформу?',
      content:"Полный список доступных льгот можно найти в разделе «Каталог льгот» на платформе.",
      active: false,
      iconActive: false,
    }
    ]

}
