export interface IACcordionStyling {
  numberdItems?: boolean;
  guttedItems?: boolean | string | '1rem',
  itemStyling?: IAccordionItemStyling | IAccordionItemStyling[];
}

export type IAccordionItemStyling = {
  itemId?: number | string | null;
  FontStyles?: string | null;
} & IAccordionItemSpacingStyling & IAccordionItemBodyStyling & IAccordionItemHeadStyling;

export interface IAccordionItemSpacingStyling {
  padding?: string | null;
  margin?: string | null;
}

export interface IAccordionItemHeadStyling {
  headFontStyle?: string | null;
  headColor?: string;
  headBgColor?: string;
}

export interface IAccordionItemBodyStyling {
  bodyFontStyle?: string | null;
  bodyColor?: string;
  bodyBgColor?: string;
}