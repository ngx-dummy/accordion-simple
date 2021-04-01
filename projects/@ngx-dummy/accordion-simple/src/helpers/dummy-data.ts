/* eslint-disable max-len */
import { Accordion, IAccordionStyling } from '../lib/settings/';

export const simpleAccordionList = {
	id: 'Test ID 1',
	name: 'Test list1',
	items: [
		{
			title: 'test item1',
			body: 'Test body text',
			id: 0,
			itemNum: 1,
			isOpen: false,
		},
	],
};

export const dummyAccordionList1: Accordion = {
	id: 'Accord_1',
	name: 'Accordion 1',
	items: [
		{
			title: 'Accordion Card 1',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione',
		},
		{
			title: 'Accordion Card 2',
			body: `
        <div class="item__container" style="background: #ddd; color: yellow;" onclick="return false;" >
          <header class="heading" style="text-align:left;">
            <h3 style="text-align:left;">Accordion Card num.2</h3>
            <h6>Some subHeader</h6>
          </header>
          <img class="item__logo" src="https://via.placeholder.com/100" alt="Image placeholder" />
          <main class="main-item__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
            Lorem ipsum dolor
          </main>
          <footer class="item-footer" style="font-size: .5rem; text-align:right !important;color:red !important;">
            All rights reserved: Vladimir Ovsyukov (ovsyukov@yandex.com)
          </footer>
        </div>
      `,
		},
		{
			title: 'Accordion simple Card 3 x 11',
			body: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
      `,
		},
	],
};

export const dummyAccordionList2: Accordion = {
	id: 'Accord_2',
	name: 'Accordion 2',
	items: [
		{
			id: 0,
			title: 'Card 1',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione',
		},
		{
			id: 1,
			title: 'Card 2',
			body: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
      `,
		},
		{
			id: 2,
			title: 'Card 3',
			body: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
      `,
		},
		{
			id: 3,
			title: 'Card 4',
			body: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
      `,
		},
	],
};

export const sampleStyling: IAccordionStyling = {
	numberedItems: false,
	maxWidth: '100%',
	itemsGuts: '1rem',
	margin: '0',
	itemStyling: {
		headBgColor: '#4197b2',
		headColor: '#fff',
		bodyBgColor: '#fff',
		bodyColor: '#000',
		margin: '0',
		padding: '0',
	},
};
