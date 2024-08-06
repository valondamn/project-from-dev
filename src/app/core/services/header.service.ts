import { Injectable, signal } from '@angular/core';
import { InvestorsLinks } from '@core/components/header/links/investors-links';
import { ListingLinks } from '@core/components/header/links/listing-links';
import { BiddersLinks } from '@core/components/header/links/bidders-links';
import { ClearingLinks } from '@core/components/header/links/clearing-links';
import { InformationLinks } from '@core/components/header/links/information-links';
import { MediaCenterLinks } from '@core/components/header/links/media-center-links';
import { AboutLinks } from '@core/components/header/links/about-links';
import { MarketsLinks } from '@core/components/header/links/markets-links';
import { IndexesLinks } from '@core/components/header/links/indexes-links';
import { SelectOption } from '@shared/interfaces/select-option.interface';
import { TranslateService } from '@ngx-translate/core';
import {
  HeaderBigMenu,
  HeaderMenu,
} from '@shared/interfaces/header-menu.interface';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public isVisible: boolean = true;
  public isShown: boolean = false;
  public isSidebarVisible = signal<boolean>(false);
  public isSearchbarVisible = signal<boolean>(false);
  public selectedLanguage: string = 'ru';

  public languageOptions: SelectOption[] = [
    { label: 'Қазақша', value: 'kz' },
    { label: 'Русский', value: 'ru' },
    { label: 'English', value: 'en' },
  ];

  public selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language);
  }

  currentItem = '';

  public headerMenuList: (HeaderBigMenu | HeaderMenu)[] = [
    {
      title: 'HEADER.MARKETS',
      menuList: MarketsLinks,
      type: 'big',
    },
    {
      title: 'HEADER.INDEXES',
      menuList: IndexesLinks,
      type: 'big',
    },
    {
      title: 'HEADER.INVESTORS',
      menuList: InvestorsLinks,
      type: 'small',
    },
    {
      title: 'HEADER.LISTING',
      menuList: ListingLinks,
      type: 'small',
    },
    {
      title: 'HEADER.BIDDERS',
      menuList: BiddersLinks,
      type: 'small',
    },
    {
      title: 'HEADER.CLEARING_AND_SETTLEMENTS',
      menuList: ClearingLinks,
      type: 'small',
    },
    {
      title: 'HEADER.INFORMATION',
      menuList: InformationLinks,
      type: 'big',
    },
    {
      title: 'HEADER.MEDIA_CENTER',
      menuList: MediaCenterLinks,
      type: 'small',
    },
    {
      title: 'HEADER.ABOUT',
      menuList: AboutLinks,
      type: 'small',
    },
  ];

  public openSearchbar() {
    this.isSearchbarVisible.set(true);
  }

  constructor(private translate: TranslateService) {}
}
