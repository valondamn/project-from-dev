import { Tab } from '@shared/interfaces/tab.interface';
import { Media } from '@shared/interfaces/media.interface';

export interface DocumentList extends Tab {
  documents: Document[];
}

export interface Document {
  title: string;
  file: Media;
  info?: string;
}
