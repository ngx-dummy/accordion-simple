import { AccordionItemInternal } from './IAccordion';

export interface IToggleer {
	itemId: number;
	isOpen: boolean;
}

export const pluckIToggler = ({ itemId, isOpen, ...rest }: AccordionItemInternal) => (<IToggleer>{ itemId, isOpen });
export const pluckOpenTogglesIds = (toggles: IToggleer[]): string => toggles.filter(t => t.isOpen === true).map(t => t.itemId).join(',');