import { Media } from '@shared/interfaces/media.interface';
import { TextLink } from '@shared/interfaces/text-interface';

export interface ActualInfo {
  actualInfo: {
    title: string;
    type: string;
    link: TextLink;
  };
}

export interface ActualInfoImage {
  id: number;
  image: Media;
}
