import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from '../../shared/interfaces/orders.interface';

@Injectable({
  providedIn: 'root',
})
export class OrdersServiceService {
  private url = environment.serverURL; // Base URL

  constructor(private httpClient: HttpClient) {}

  getOrders(): Observable<Orders[]> {
    return this.httpClient.get<Orders[]>(`${this.url}/hr/orders/`);
  }
}
