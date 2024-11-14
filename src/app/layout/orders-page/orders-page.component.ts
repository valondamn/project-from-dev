import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { PaginatorModule } from 'primeng/paginator';
import { PrimaryButtonComponent } from '../../shared/components/buttons/primary-button/primary-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StaffCardsComponent } from '../../shared/components/staff-cards/staff-cards.component';

import { OrdersCardsComponent } from '../../shared/components/orders-cards/orders-cards.component';
import { Orders } from '../../shared/interfaces/orders.interface';
import { OrdersServiceService } from './orders.service';

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [
    ModalComponent,
    PaginatorModule,
    PrimaryButtonComponent,
    ReactiveFormsModule,
    StaffCardsComponent,
    OrdersCardsComponent,
  ],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.scss',
})
export class OrdersPageComponent implements OnInit {
  public isLoading: boolean = true;

  public orders!: Orders[];

  constructor(public ordersService: OrdersServiceService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  public getOrders() {
    this.isLoading = true;
    this.ordersService.getOrders().subscribe(
      (data) => {
        this.orders = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching benefits:', error);
        this.isLoading = false;
      },
    );
  }
}
