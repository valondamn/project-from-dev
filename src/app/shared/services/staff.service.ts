import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from '../interfaces/staff.interface';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private url = environment.serverURL; // Base URL

  constructor(private httpClient: HttpClient) {}

  getStaffList(): Observable<Staff[]> {
    return this.httpClient.get<Staff[]>(`${this.url}/hr/users/`);
  }

  addStaff(data: FormData): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/hr/create_user/`, data);
  }

  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<any>(`${this.url}/hr/users/${id}/`);
  }
}
