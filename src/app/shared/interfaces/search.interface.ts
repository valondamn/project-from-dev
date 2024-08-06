import { SecurityType } from '@shared/interfaces/security.interface';

export interface SearchResult {
  issuers: IssuerSearch[];
  securities: SecuritySearch[];
  members: MemberSearch[];
}

export interface IssuerSearch {
  name_ru: string;
  name_en: string;
  name_kz: string;
  code: string;
}

export interface SecuritySearch {
  code: string;
  name_ru: string;
  name_en: string;
  name_kz: string;
  sec_type: SecurityType;
}

export interface MemberSearch {
  code: string;
  short_name_ru: string;
  short_name_en: string;
  short_name_kz: string;
}
