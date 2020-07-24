import { Observable, Subscription } from 'rxjs';
import { AccordionOpenService } from './accordion-open.service';
import { IToggleer } from './settings/';

describe('AccordionOpenService', () => {
  let service: AccordionOpenService = null;
  let svcSub: Subscription = null;

  beforeEach(async () => {
    service = new AccordionOpenService();
  });

  afterEach(() => {
    svcSub && !!!svcSub?.closed && svcSub?.unsubscribe();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.itemsOpen$).toBeInstanceOf(Observable);
    expect(service.setItemsOpen).toBeInstanceOf(Function);
    expect(service.itemsOpenSnapshot).toBeInstanceOf(Array);
  });

  it('should emit value', () => {
    const testVals: IToggleer[] = [{ itemId: 0, isOpen: true }];
    service.setItemsOpen(testVals);

    expect(service.itemsOpenSnapshot).toBeTruthy();
    expect(service.itemsOpenSnapshot.length).toBeGreaterThan(0);
    svcSub = service.itemsOpen$.subscribe(toggler => {
      expect(toggler).not.toBeFalsy();
      expect(toggler.length).toBeGreaterThan(0);
    });
  });

});
