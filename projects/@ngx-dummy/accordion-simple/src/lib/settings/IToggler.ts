import { AccordionItemInternal } from './IAccordion';

export interface IToggleer {
	itemId: number;
	isOpen: boolean;
}

export const pluckIToggler = ({ itemId, isOpen, ...rest }: AccordionItemInternal = { itemId: 0, isOpen: false, title: '', body: '' }) => <IToggleer>({ itemId, isOpen });