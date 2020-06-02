export interface IAccordionStyling {
	maxWidth?: string | number | null;
	numberdItems?: boolean;
	bodyDbclkcloseItems?: boolean;
	isMultiShow?: boolean;
	itemsGutts?: number | string | null;
	margin?: string | number;
	itemStyling?: IAccordionItemStyling | IAccordionItemStyling[];
}

export type IAccordionItemStyling = {
	itemId?: number | string | null;
	font?: string | null;
	fontSize?: number | string;
	fontFamily?: string;
	fontStyle?: 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit';
}
	& IAccordionItemSpacingStyling
	& IAccordionItemBodyStyling
	& IAccordionItemHeadStyling;

export interface IAccordionItemSpacingStyling {
	padding?: string | number | null;
	marginBottom?: string | number | null;
	marginTop?: string | number | null;
	margin?: string | number | null;
}

export interface IAccordionItemHeadStyling {
	headFontSize?: string | null;
	headFont?: string | null;
	headColor?: string;
	headBgColor?: string;
	headHeight?: string | number | null;
}

export interface IAccordionItemBodyStyling {
	bodyFont?: string | null;
	bodyFontSize?: string | null;
	bodyColor?: string;
	bodyBgColor?: string;
	bodyPadding?: string | number | null;
	bodyMargin?: string | number | null;
}
