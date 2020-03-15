export interface ICcordionStyling {
  itemStyling?: IAccordionItemStyling | IAccordionItemStyling[];
}

export type IAccordionItemStyling = {
  itemId?: number | string | null;
  FontStyles?: string | null;
} & IAccordionItemBodyStyling & IAccordionItemHeadStyling;

export interface IAccordionItemHeadStyling {
  headontStyle?: string | null;
  headColor?: string;
  headBgColor?: string;
}

export interface IAccordionItemBodyStyling {
  bodyFontStyle?: string | null;
  bodyColor?: string;
  bodyBgColor?: string;
}