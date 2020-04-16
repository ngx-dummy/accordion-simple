import { SafeUrl } from '@angular/platform-browser';

export interface IAccordionStyling {
  maxWidth?: string | number | null;
  numberdItems?: boolean;
  itemsGutts?: boolean | string,
  margin?: string | number;
  itemStyling?: IAccordionItemStyling | IAccordionItemStyling[];
}

export type IAccordionItemStyling = {
  itemId?: number | string | null;
  FontStyles?: string | null;
  logo?: string;
  openSign?: string | SafeUrl;
  closeSign?: string | SafeUrl;
}
  & IAccordionItemSpacingStyling & IAccordionItemBodyStyling & IAccordionItemHeadStyling;

export interface IAccordionItemSpacingStyling {
  padding?: string | number | null;
  marginBottom?: string | number | null;
  margin?: string | number | null;
}

export interface IAccordionItemHeadStyling {
  headFontStyle?: string | null;
  headColor?: string;
  headBgColor?: string;
  headHeight?: string | number | null;
  openImg?: string | null;
}

export interface IAccordionItemBodyStyling {
  bodyFontStyle?: string | null;
  bodyColor?: string;
  bodyBgColor?: string;
  bodyPadding?: string | number | null;
  bodyMargin?: string | number | null;
}