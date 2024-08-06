import { Security, SecurityType } from '@shared/interfaces/security.interface';

export interface BasketSecurity {
  code: string;
  org_code: string;
  org_name_ru: string;
  org_name_en: string;
  org_name_kz: string;
  isin: string;
  open_trade_date: string;
  type_ru: string;
  type_kz: string;
  type_en: string;
  sec_type: SecurityType;
}

export interface Repo {
  actual_date?: string;
  open_income?: number;
  min_income?: number;
  max_income?: number;
  close_income?: number;
  deal_count?: number;
  average_income?: number;
  average_income_diff?: number;
  sum_volume_kzt?: number;
  sum_volume_usd?: number;
  market_part?: number;
}

export interface AutoRepo extends Repo {
  kreddays: number;
}

export type AutoRepoBasket = 'GCBRK' | 'GCBRK-GR' | 'BSP';

export interface SecRepo extends Repo {
  code: string;
  board: string;
}

export type SecRepoSector =
  | 'shares'
  | 'bonds'
  | 'gsecs'
  | 'mfo'
  | 'mifs'
  | 'kaseglobal';

export interface RepoLeader extends Security {
  code: string;
  deal_count: number;
  sum_volume_kzt: number;
  market_part: number;
}

export type RepoLeaderType = 'autorepo' | 'with_cc';
