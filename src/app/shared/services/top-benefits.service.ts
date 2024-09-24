import {Injectable} from '@angular/core';
import {environment} from "../../../enviroments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BenefitsTop} from "../../layout/main/main.interface";

@Injectable({
  providedIn: 'root'
})
export class TopBenefitsService {
  private url = environment.serverURL; // Base URL

  constructor(private httpClient: HttpClient) {
  }

  getTopBenefits(): Observable<BenefitsTop[]> {
    return this.httpClient.get<BenefitsTop[]>(`${this.url}/benefits/top/`);
  }
}
