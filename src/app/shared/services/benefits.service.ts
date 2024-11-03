import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class BenefitsService {
  private apiUrl = `${environment.serverURL}/benefits/order`;

  constructor(private http: HttpClient) {}

  // Метод для покупки льготы
  purchaseBenefit(benefitId: number): Observable<any> {
    const token = localStorage.getItem('authToken'); // Извлекаем токен из localStorage
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`, // Добавляем заголовок Authorization с токеном
    });

    return this.http.post(`${this.apiUrl}/${benefitId}/`, {}, { headers });
  }
}
