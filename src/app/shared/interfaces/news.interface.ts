import { Media } from '@shared/interfaces/media.interface';
import { RequiredLink } from '@shared/interfaces/link.interface';
import { Tab } from '@shared/interfaces/tab.interface';
import { AdBanner } from '@shared/interfaces/ad-banner.interface';
import { Contacts } from '@shared/interfaces/contacts.interface';
import { ActualInfo } from '@shared/interfaces/actual-info.interface';

export interface NewsItem {
  id: number;
  create_datetime: string;
  language: string;
  subject: string;
  body: string;
  rubrics: Rubric[];
  versions: {
    [key: string]: {
      id: number;
    };
  };
  mainRubric: Rubric;
}

export interface NewsResponse {
  count: number;
  page: number;
  per_page: number;
  results: NewsItem[];
}

export interface Rubric {
  id: number;
  name: string;
  name_ru: string;
  name_en: string;
  name_kz: string;
}

export interface NewsInfo {
  headerTitle: string;
  headerDescription: string;
  headerBackground: Media;
  pathTree: RequiredLink[];
  tabs: Tab[];
  marketRubrics: string;
  companyRubrics: string;
  exchangeRubrics: string;
  allNewsRubrics: string;
  bigAdBanner: AdBanner;
  contacts: Contacts;
  actualInfo: ActualInfo[];
}

export interface NewsDetailInfo {
  bigAdBanner: AdBanner;
}
