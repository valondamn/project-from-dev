export interface Indicator {
  id: number;
  fini_code: string;
  name: string;
  name_ru: string;
  name_en: string;
  name_kz: string;
  unit: string;
  unit_ru: string;
  unit_en: string;
  unit_kz: string;
  info: {
    last_date: string;
    trand_date: string;
    lastdp: number;
    lastdp_1: number;
    trand_percent: number;
    trand: number;
    mtrand_percent: number;
    mtrand: number;
  } | null;
}
