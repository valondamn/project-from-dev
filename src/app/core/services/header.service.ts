import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public isVisible: boolean = true;
  public isShown: boolean = false;
  public isSidebarVisible = signal<boolean>(false);
  public isSearchbarVisible = signal<boolean>(false);
  public selectedLanguage: string = 'ru';



  public openSearchbar() {
    this.isSearchbarVisible.set(true);
  }

  constructor() {}
}
