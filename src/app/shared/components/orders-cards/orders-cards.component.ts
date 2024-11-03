import { Component, Input } from '@angular/core';
import { CoinsComponent } from '../coins/coins.component';
import { NgForOf } from '@angular/common';
import { Orders } from '../../interfaces/orders.interface';
import { ModalComponent } from '../modal/modal.component';
import { PrimaryButtonComponent } from '../buttons/primary-button/primary-button.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { BenefitsCardsComponent } from '../benefits-cards/benefits-cards.component';

@Component({
  selector: 'app-orders-cards',
  standalone: true,
  imports: [
    CoinsComponent,
    NgForOf,
    ModalComponent,
    PrimaryButtonComponent,
    SvgIconComponent,
    BenefitsCardsComponent,
  ],
  templateUrl: './orders-cards.component.html',
  styleUrl: './orders-cards.component.scss',
})
export class OrdersCardsComponent {
  @Input() orders!: Orders[];
  isModalVisible: boolean = false;
  public currentCard!: Orders;

  public openModal(order: Orders) {
    this.currentCard = order;
    this.isModalVisible = true;
  }
}
