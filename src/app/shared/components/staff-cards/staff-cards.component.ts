import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Staff} from "../../interfaces/staff.interface";
import {CoinsComponent} from "../coins/coins.component";
import {PrimaryButtonComponent} from "../buttons/primary-button/primary-button.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-staff-cards',
  standalone: true,
  imports: [
    CoinsComponent,
    PrimaryButtonComponent,
    NgForOf
  ],
  templateUrl: './staff-cards.component.html',
  styleUrl: './staff-cards.component.scss'
})
export class StaffCardsComponent {
  @Input() staffList!: Staff[]
  @Output() deleteUser = new EventEmitter<number>();

  public onDeleteUser(id: number) {
    this.deleteUser.emit(id);
  }

  trackById(index: number, item: Staff): number {
    return item.id;
  }
}
