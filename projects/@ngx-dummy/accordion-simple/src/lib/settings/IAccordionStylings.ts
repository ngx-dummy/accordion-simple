/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU LGPLv3 License
 */
/**
 * @description
 *  Data type accordion component accepts as an {@link AccordionComponent#accordionStyling} `Input`
 *
 *  Comprises {@link AccordionComponent} styling, as well as {@link AccordionItemComponent} stylings
 *
 *  Stylings type accordion component accepts as an {@link AccordionComponent#accordionStyling} `Input`
 */
export interface IAccordionStyling {
	/** `max-width` css style for accordion element */
	maxWidth?: string | number | null;
	/** defines whether every accordion item element for particular accordion component should be numbered (have numbers in header element) */
	numberedItems?: boolean;
	/** defines whether every accordion item element could be collapsed on double-click inside (previously) opened items' body element */
	bodyDblclkCloseItems?: boolean;
	/** defines whether every accordion item element should be collapsed upon opening another item of the same accordion component */
	isMultiShow?: boolean;
	/** defines margins between accordion elements */
	itemsGuts?: number | string | null;
	/** defines `margin` styles within accordion elements */
	margin?: string | number;
	/** @member {Object} itemStyling styles and settings for every accordion item element in a particular Accordion */
	itemStyling?: IAccordionItemStyling | IAccordionItemStyling[];
}
/**
 * @description
 * combined stylings for `AccordionComponent` children `AccordionItemComponent`s elements;
 *
 * comprises font-styles of every accordion item element, as well as spacing styles, and margins, paddings, colors and other styles for both items' header and body elements
 */
export type IAccordionItemStyling = IAccordionItemFontStyling & IAccordionItemSpacingStyling & IAccordionItemBodyStyling & IAccordionItemHeadStyling;

/**
 * @description
 * fonts' definitions for every accordion item element
 */
export interface IAccordionItemFontStyling {
	font?: string | null;
	fontSize?: number | string;
	fontFamily?: string;
	fontStyle?: 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit';
}
/**
 * @description
 * margins/paddings definitions for accordion item element
 */
export interface IAccordionItemSpacingStyling {
	padding?: string | number | null;
	marginBottom?: string | number | null;
	marginTop?: string | number | null;
	margin?: string | number | null;
}
/**
 * @description
 * stylings definitions for accordion item element's header
 */
export interface IAccordionItemHeadStyling {
	headFontSize?: string | null;
	headFont?: string | null;
	headColor?: string;
	headBgColor?: string;
	headHeight?: string | number | null;
}
/**
 * @description
 * stylings definitions for accordion item element's body
 */
export interface IAccordionItemBodyStyling {
	bodyFont?: string | null;
	bodyFontSize?: string | null;
	bodyColor?: string;
	bodyBgColor?: string;
	bodyPadding?: string | number | null;
	bodyMargin?: string | number | null;
	bodyTextAlign?: string;
}
