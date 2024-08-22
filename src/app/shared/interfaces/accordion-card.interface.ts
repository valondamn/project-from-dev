
export interface AccordionCard {
  title: string;
  content: string;
  active: boolean;
  iconActive: boolean;
  iconLinks?: IconLink[];
}

export interface IconLink {
  link: string;
}
