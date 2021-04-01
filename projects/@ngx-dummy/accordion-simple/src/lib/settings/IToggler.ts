/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU GPLv3 License
 */
import { AccordionItemInternal } from './IAccordion';

export interface IToggler {
	itemId: number;
	isOpen: boolean;
}

export const pluckIToggler = ({
	itemId,
	isOpen,
	...rest
}: AccordionItemInternal) => <IToggler>{ itemId, isOpen };
export const pluckOpenTogglesIdsToStr = (toggles: IToggler[]): string =>
	toggles
		.filter((t) => t.isOpen === true)
		.map((t) => t.itemId)
		.join(',');
