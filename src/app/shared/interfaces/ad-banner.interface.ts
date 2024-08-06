import { Media } from '@shared/interfaces/media.interface';
import { RequiredLink } from '@shared/interfaces/link.interface';

export interface AdBanner {
  title: string;
  image: Media;
  text: string;
  link: RequiredLink;
}
