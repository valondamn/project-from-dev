import {Injectable} from '@angular/core';
import {environment} from "../../../enviroments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categories} from "../../layout/main/main.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private url = environment.serverURL; // Base URL

  constructor(private httpClient: HttpClient) {
  }

  getCategories(): Observable<Categories[]> {
    return this.httpClient.get<Categories[]>(`${this.url}/benefits/categories/`);
  }
}
