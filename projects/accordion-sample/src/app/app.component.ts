import { Component } from '@angular/core';
import { Accordion, IAccordionStyling } from '@ngx-dummy/accordion-simple/settings/index';
// import { MDCRipple } from "@material/ripple";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'accordion-sample';
  sampleAccordionData: Accordion = {
    id: 'sample_accordion',
    
    items: [
      {
        id: 0,
        title: 'Card 1',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione',
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        `
      },
      {
        id: 3,
        title: 'Card 2',
        body: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        `,
      },
      {
        id: 4,
        title: 'Card 2',
        body: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione
        `,
      },
      {
        id: 5,
        title: 'Card 2',
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
        `,
      },
    ]
  };

  styling: IAccordionStyling = {
    itemsGutts: '1px',
    maxWidth: '99%',
    margin: '1rem',
    
    itemStyling: {
      margin: '1px',
      bodyBgColor: '#f9f9f9',
      bodyPadding: '1rem',
      bodyMargin: '.1rem'
    }
  }

  constructor() { }

  click($event) { }
}
