import {Component, Input} from '@angular/core';
import {Cards} from "../../../layout/main/main.interface";
import {SvgIconComponent} from "angular-svg-icon";
import {PrimaryButtonComponent} from "../buttons/primary-button/primary-button.component";
import {CoinsComponent} from "../coins/coins.component";
import {ModalComponent} from "../modal/modal.component";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-benefits-cards',
  standalone: true,
  imports: [
    SvgIconComponent,
    PrimaryButtonComponent,
    CoinsComponent,
    ModalComponent,
    NgIf,
    RouterLink
  ],
  templateUrl: './benefits-cards.component.html',
  styleUrl: './benefits-cards.component.scss'
})
export class BenefitsCardsComponent {
  @Input({ required: true }) cards!: Cards[];

  public currentCard!: Cards;
  public modalVisible: boolean = false;
  public purchaseSuccessModalVisible: boolean = false;

  public confirmPurchase() {
    this.modalVisible = false;
    this.purchaseSuccessModalVisible = true;
  }
  public openModal(card: Cards) {
    this.currentCard = card;
    this.modalVisible = true;
  }

  public closeSuccessModal() {
    this.purchaseSuccessModalVisible = false;
  }

  public closeConfirmPurchase() {
    this.modalVisible = false;
  }

}
