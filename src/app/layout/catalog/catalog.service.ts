import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../enviroments/environment";
import {Cards} from "../main/main.interface";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private url = environment.serverURL; // Base URL

  constructor(private httpClient: HttpClient) {
  }

  // Method to get benefits
  getBenefits(): Observable<Cards[]> {

    return this.httpClient.get<Cards[]>(`${this.url}/benefits/`);
  }
}
