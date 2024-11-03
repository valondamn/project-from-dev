import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/environment';
import { Cards } from '../main/main.interface';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private url = environment.serverURL; // Base URL

  constructor(private httpClient: HttpClient) {}

  // Method to get benefits
  getBenefits(): Observable<Cards[]> {
    return this.httpClient.get<Cards[]>(`${this.url}/hr/benefits/`);
  }

  addBenefit(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/hr/create_benefit/`, data);
  }

  deleteBenefit(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/hr/benefits/${id}/`);
  }

  // benefits.service.ts

  updateBenefit(id: number, data: FormData): Observable<any> {
    return this.httpClient.put(`${this.url}/hr/benefits/${id}/`, data);
  }
}
