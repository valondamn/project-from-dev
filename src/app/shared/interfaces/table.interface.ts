export interface TableSort {
  column: string;
  direction: TableSortDirection;
}

export type TableSortDirection = 'asc' | 'desc' | 'neutral';
