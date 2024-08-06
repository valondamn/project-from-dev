import { RequiredLink } from '@shared/interfaces/link.interface';
import { Media } from '@shared/interfaces/media.interface';

export interface Header {
  title: string;
  content: string;
  subContent: string;
  pathTree: RequiredLink[];
  headerBackground: Media;
}
