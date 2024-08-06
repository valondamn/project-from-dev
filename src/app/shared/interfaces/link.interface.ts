import { Media } from '@shared/interfaces/media.interface';

export interface Link {
  title: string;
  link: string | null;
}

export interface RequiredLink {
  title: string;
  link: string;
}

export interface FragmentLink {
  title: string;
  link: string;
  fragment: string;
}

export interface LinkWithFile {
  title: string;
  link: string;
  file: Media;
}
