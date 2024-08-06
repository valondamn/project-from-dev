export interface WidgetSecurity {
  code: string;
  date0: string;
  price: number;
  trand_percent: number;
  month_trand: number;
  month_trand_percent: number;
  monthly_spark_line: string;
}

export const SecurityTypeList = {
  share: 'акция',
  dept: 'депозиторные расписки',
  gsec: 'гос. облигация',
  bond: 'облигация',
  mif: 'паи',
  ksu: 'КСУ',
  currency: 'валюта',
  repo: 'репо',
  'security-futures': 'фондовые деривативы',
  'index-futures': 'индекс деривативы',
  'currency-futures': 'валютные деривативы',
  null: 'repo',
};

export const kaseGlobalMainMarket = {
  nasdaq: 'NASDAQ',
  nyse: 'New York Stock Exchange (NYSE)',
  euronext: 'Euronext Paris',
};

export type SecurityType = keyof typeof SecurityTypeList;
export type KaseGlobalType = keyof typeof kaseGlobalMainMarket;

export interface MarketMaker {
  org_code: string;
  org_name_ru: string;
  org_name_en: string;
  org_name_kz: string;
  org_short_name_ru: string;
  org_short_name_en: string;
  org_short_name_kz: string;
  org_shortest_name_ru: string;
  org_shortest_name_en: string;
  org_shortest_name_kz: string;
}

export interface Security {
  id: number;
  code: string;
  ticker: SecurityTicker;
  sec_type: SecurityType;
  org_code: string;
  org_name_ru: string;
  org_name_kz: string;
  org_name_en: string;
  org_short_name_ru: string;
  org_short_name_kz: string;
  org_short_name_en: string;
  currency_type: string;
  price: number;
  close_price: number;
  best_bid: number;
  best_offer: number;
  volkzt: number;
  volusd: number;
  cnt_mm: number | null;
  date0: string;
  trand: number;
  trand_percent: number;
  dohod: number;
  dohod_total: number;
  dtm: number;
  ytm: number;
  dealcnt: number;
  fin_sec_ru: string;
  fin_sec_en: string;
  fin_sec_kz: string;
  board_ru: string;
  board_en: string;
  board_kz: string;
  subcategory_name_ru: string;
  subcategory_name_en: string;
  subcategory_name_kz: string;
  repayment_start_date: string;
  scheme: string;
  main_market_ru: KaseGlobalType | '';
  main_market_kz: KaseGlobalType | '';
  main_market_en: KaseGlobalType | '';
  market_makers: MarketMaker[];
  t_plus: boolean;
  liquid_class: number;
}

export interface SecurityTicker {
  id: number;
  nin: string;
  nin2: string;
  ofic_list: boolean;
  non_list: boolean;
  cur_open_trades: string;
  amount: number;
  instrname_ru: string;
  instrname_en: string;
  instrname_kz: string;
  nind: string;
  nind2: string;
  exc_date: string;
  spot: boolean;
  swop: boolean;
  underlying_ru: string;
  underlying_en: string;
  underlying_kz: string;
  settlement_schemes: string;
  typesec_ru: string;
  typesec_en: string;
  typesec_kz: string;
  category_offlist_ru: string;
  category_offlist_en: string;
  category_offlist_kz: string;
  securities_list_ru: string;
  securities_list_en: string;
  securities_list_kz: string;
  currency: string;
  trading_currency: string;
  settlement_currency: string;
  finish_date: string;
  cupon: number;
  cupon2: number;
  fin_sec_ru: string;
  fin_sec_en: string;
  fin_sec_kz: string;
  offer_predmet: string;
  include_date_trade_list: string;
  bond_type_ru: string;
  bond_type_kz: string;
  bond_type_en: string;
  open_trade_date: string;
  nbrk_view_ru: string;
  nbrk_view_en: string;
  nbrk_view_kz: string;
  gsec_type_ru: string;
  gsec_type_en: string;
  gsec_type_kz: string;
  is_index_kase: boolean;
  is_kase_b: boolean;
  susp_trddat: string;
  resum_trddat: string;
  incl_date: string;
  excl_date: string;
  basis: string;
  ticker_category_id: number;
  type_sector: number;
}

export type GsecIssuer = '' | 'MFRK' | 'NBRK' | 'akimat' | 'foreign';

export interface SecDoc {
  name: string;
  url: string;
}

export interface SecProspectus {
  year: number;
  docs: SecDoc[];
}

export interface Characteristics {
  [key: string]: {
    label: string;
    value: string;
  };
}

export type BondPriceType = 'clean' | 'dirty' | 'income';
