import { Staff } from './staff.interface';
import { Cards } from '../../layout/main/main.interface';

export interface Orders extends Staff {
  orders: Order[];
}

export interface Order {
  date: string;
  benefits: Cards[];
}
