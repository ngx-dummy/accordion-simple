export interface Accordion {
  id?: string | number | null;
  items: AccordionItem[];
  isOpen?: boolean | null;
  openedItem?: number | string | null;
}

export interface AccordionItem {
  id: number | null;
  title: string;
  body: string;
  isOpen?: boolean;
}