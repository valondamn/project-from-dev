export const ChartTypeList = {
  indicator: '/charts/indicators',
  security: '/charts/securities',
  currency: '/charts/currency',
  ida: '/charts/ida',
};

export type ChartType = keyof typeof ChartTypeList;
