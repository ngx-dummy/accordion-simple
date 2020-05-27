export interface Accordion extends AccordionItems {
  id: string | number | null;
  name: string | null;
  isOpen?: boolean | null;
  openedItem?: number | string | null;
};

export interface AccordionItems {
  items: AccordionItem[];
}

export type AccordionItem = {
  id?: number | null;
  title: string;
  body: string;
  isOpen?: boolean;
}
  & { itemNum?: number | string | null; };