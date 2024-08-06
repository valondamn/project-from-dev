import { TextLink } from './text-interface';
import { Media } from '@shared/interfaces/media.interface';
import { ActualInfo } from '@shared/interfaces/actual-info.interface';
import { Contacts } from '@shared/interfaces/contacts.interface';

export interface UnlistedSecuritiesInfo {
  title: string;
  headerContent: string;
  headerImage: Media;
  infoTitle: string;
  infoContent: {
    text: string;
  }[];
  importantTitle: string;
  importantContent: string;
  importantFile: TextLink;
  allowanceTitle: string;
  allowanceSteps: {
    title: string;
    text: string;
  }[];
  contacts: Contacts;
  actualInfo: ActualInfo[];
}
