import { TextInfoLink, TextLink } from './text-interface';
import { Media } from '@shared/interfaces/media.interface';
import { Tab } from '@shared/interfaces/tab.interface';
import { Contacts } from '@shared/interfaces/contacts.interface';
import { ActualInfo } from '@shared/interfaces/actual-info.interface';

export interface ListingAdvantage extends Tab {
  text: string;
}

export interface ListingStage {
  title: string;
  number: number;
  stageCards: StageCard[];
}

export interface StageCard {
  title: string;
  image: Media;
  imageFull: Media | null;
  content: TextLink[];
  docs: TextInfoLink[];
  modal: StageCardModal;
  link: TextLink;
  subLink: TextLink | null;
}

export interface StageCardModal {
  title: string;
  tabs: Tab[];
  modalTabs: StageCardModalTab[];
}

export interface StageCardModalTab {
  title: string;
  code: string;
  paragraphs: {
    blocks: TextLink[];
  }[];
  image: Media;
  link: TextLink | null;
}

export interface Video extends Tab {
  id: number;
  text: string;
  url: string;
}

export interface ListedCompanyInfo {
  title: string;
  headerContent: { text: string }[];
  headerBackground: Media;
  descriptionTitle: string;
  descriptionTextBlocks: {
    text: string;
  }[];
  listingAdvantagesTitle: string;
  advantagesBackground: Media;
  advantageTabs: Tab[];
  advantages: ListingAdvantage[];
  listingStagesTitle: string;
  listingStages: ListingStage[];
  usefulMaterialsTitle: string;
  videoLinks: Video[];
  materialDocs: TextLink[];
  contacts: Contacts;
  actualInfo: ActualInfo[];
}
