import { of } from 'rxjs';

import { Accordion } from '../IAccordion';

export const dummyAccordionList: Accordion = {
  id: 0,
  items: [
    {
      id: 0,
      title: 'Accordion Flashcards',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione',
      isOpen: false
    },
    {
      id: 1,
      title: 'Economic Flashcard',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione',
      isOpen: false
    },
    {
      id: 2,
      title: 'Item 3',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione',
      isOpen: false
    }
  ]
}