import { TemplateRef } from '@angular/core';

/**
 * Data type accordion-component accepts as an {@link AccordionComponent#accordionList} Input
 * @member {Object}
 */
export interface Accordion extends AccordionItems {
	id?: string | number | null;
	name?: string | null;
	isOpen?: boolean | null;
	openedItem?: number | string | null;
}

export interface AccordionItems {
	items: AccordionItem[];
}

/**
 * Properties of every Accordion items 
 * @member {Object}
 */
export interface AccordionItem {
	id?: number | string | null;
	title: string;
	body: string | ItemTemplateContext | undefined;
};

export interface ItemTemplateContext {
	itemTemplate: TemplateRef<Element | HTMLElement> | undefined;
	itemBody?: string | object | undefined;
};

export interface AccordionItemInternal extends AccordionItem {
	itemId: number;
	itemNum?: number | string | null;
	isOpen?: boolean;
}

export interface AccordionInternal extends Accordion {
	items: AccordionItemInternal[];
}