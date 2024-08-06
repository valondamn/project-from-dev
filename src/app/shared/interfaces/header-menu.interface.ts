import { RequiredLink } from '@shared/interfaces/link.interface';

export interface HeaderMenu {
  title: string;
  menuList: RequiredLink[];
  type: 'small';
}

export interface HeaderBigMenu {
  title: string;
  menuList: HeaderMenu[];
  type: 'big';
}

export interface HeaderLink {
  link: RequiredLink;
  type: 'link';
}
