export interface Tab {
  title: string;
  icon?: string;
  subtitle?: string;
  link: string;
  description?: string;
}

export interface IndexTab {
  title: string;
  link: string;
  description: string;
  time: string;
  subTabs: IndexSubTab[];
}

export interface IndexSubTab {
  title: string;
  link: string;
  description?: string;
  time?: string;
}
