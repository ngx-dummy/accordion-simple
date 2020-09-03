import { TemplateRef } from '@angular/core';

/**
 * @description
 * The default Data structure, which `AccordionComponent` accepts as an `@Input` property `accordionList`.
 * 
 * Data type accordion-component accepts as an {@link AccordionComponent#accordionList} Input
 * 
 * @member {Object} Accordion @extends AccordionItems
 */
export interface Accordion extends AccordionItems {
	/**
	 * @description
	 * (Optional) Id property of accordion components. Would be set as dom element `id`attribute.
	 * 
	 * @property {string|number} id
	 *
	 * Could be omitted (in the case `id` attribute would be set by `AccordionComponent` itself)
	 *
	 */
	id?: string | number | null;
	/**
	 * @description
	 * (Optional) Name property of accordion components. Would be set as dom element `name` attribute.
	 * 
	 * @property {string} name
	 *
	 * Could be omitted (in the case `name` attribute would be set by `AccordionComponent` itself)
	 *
	 */
	name?: string | null;
}

/**
 * @description
 * Part of `Accordion` defining `AccordionItemComponent'`s basic shape (`id`, `title`, `body`)
 */
export interface AccordionItems {
/**
 * @description
 * Items defining Every `AccordionItemsComponent` shape
 * 
 * @member {Object[]} items single accordion item data 					{@link AccordionItem}
 * @member {number|string} items[].id `id` of an accordion item {@link AccordionItem.id}
 * @member {string} items[].title `title` of an accordion item 	{@link AccordionItem.title}
 * @member {string|Object} items[].body 													{@link AccordionItem.body}
 */
	items: AccordionItem[];
}

/**
 * @description
 * Properties of every Accordion items
 * @member {Object} AccordionItem
 */
export interface AccordionItem {
	/** @member {number|string} id id of accordion item */
	id?: number | string | null;
	/** @member {number|string} id title of accordion item */
	title: string;
	/** @description
	 * body data of accordion item
	 * could be simple string (will be interpolated into body container of the corresponding `AccordionItemComponent` element), or:
	 * could be {@link ItemTemplateContext}
	 * 
	 * @member {Object} body complex object containing {@link ItemTemplateContext.itemTemplate}  to provide custom accordion item body
	 * @member {Object} body.itemTemplate the `TemplateRef` to be used as body of accordion item
	 * @member {Object} body.itemBody string(/html) to be interpolated to {@link ItemTemplateContext.itemBody}
	 *  */
	body: string | ItemTemplateContext | undefined;
}

export interface ItemTemplateContext {
	itemTemplate: TemplateRef<Element | HTMLElement> | undefined;
	itemBody?: string | object | undefined;
}
/**
 * internally extended {@link AccordionItem} interface for managing state of every Accordion item
 * @internal
 */
export interface AccordionItemInternal extends AccordionItem {
	/** unique identifier of every item (used internally) */
	itemId: number;
	/** an (optional) identifier of every item (show numbered items in every accordion item element' header,
	 *  depending on value set in { import("./IAccordionStylings.ts").IAccordionStyling.numberedItems })
	 * */
	itemNum?: number | string | null;
	/**
	 * identifies whether any item is open or closed
	 */
	isOpen?: boolean;
}
/**
 * internally extended {@link Accordion} interface for managing state of an Accordion
 * @internal
 */
export interface AccordionInternal extends Accordion {
	items: AccordionItemInternal[];
}
