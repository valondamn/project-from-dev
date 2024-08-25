import {Component, Input} from '@angular/core';
import {NotificationCards} from "./notification-cards.interface";

@Component({
  selector: 'app-notification-cards',
  standalone: true,
  imports: [],
  templateUrl: './notification-cards.component.html',
  styleUrl: './notification-cards.component.scss'
})
export class NotificationCardsComponent {
  @Input() notificationCards: NotificationCards[] =[
    {title: 'Новое предложение: Льготы на август',
      subTitle: 'Доступны новые льготы на этот месяц! Проверьте список и выберите, что вам подходит.',
      image: 'assets/icons/notifications/offer.svg',
      category: 'Каталог льгот',
      time:"xxx"
    },
    {title: 'Напоминание: Срок действия льготы скоро истекает',
      subTitle: 'Ваш абонемент в спортзал истекает через 3 дня. Не забудьте воспользоваться льготой или продлить её!',
      image: 'assets/icons/notifications/reminder.svg',
      category: 'Действующие льготы',
      time:"xxx"


    },
    {title: 'Подтверждение: Льгота успешно активирована',
      subTitle: 'Вы успешно активировали абонемент в спортзал за 4 коина. Приятных тренировок!',
      image: 'assets/icons/notifications/confirmation.svg',
      category: 'Действующие льготы',
      time:"xxx"


    },
    {title: 'Коины начислены: У вас 10 новых коинов',
      subTitle: 'HR начислил вам 10 коинов. Используйте их на выбранные льготы.',
      image: 'assets/icons/notifications/coins-are-credited.svg',
      category: 'Каталог льгот',
      time:"xxx"


    }
  ]

}
