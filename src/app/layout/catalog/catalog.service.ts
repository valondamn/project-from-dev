import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Benefits} from "../main/main.interface";
import {environment} from "../../../enviroments/environment";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private url = environment.serverURL;

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getBenefits(): Observable<Benefits> {
    return this.httpClient.get<Benefits>(this.url + 'benefits');
  }

}
