import { Media } from '@shared/interfaces/media.interface';

export interface TextLink {
  text: string;
  url: string;
  file: Media | null;
}

export interface TextInfoLink {
  title: string;
  url: string | null;
  info: string | null;
  file: Media;
}
