import { Media } from '@shared/interfaces/media.interface';

export interface AccordionCard {
  title: string;
  content: string;
  active: boolean;
  iconActive: boolean;
  iconLinks?: IconLink[];
}

export interface IconLink {
  icon: Media;
  link: string;
}
