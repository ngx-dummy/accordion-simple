import { Observable } from 'rxjs';
import { AccordionOpenService } from './accordion-open.service';
import { IToggleer } from './settings/';

describe('AccordionOpenService', () => {
  let service: AccordionOpenService;

  beforeEach(async () => {
    service = new AccordionOpenService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.itemsOpen$).toBeInstanceOf(Observable);
    expect(service.setItemsOpen).toBeInstanceOf(Function);
  });

  it('should emit value', () => {
    const testVals: IToggleer[] = [{ itemId: 0, isOpen: true }];
    service.itemsOpen$.subscribe(toggler => {
      expect(toggler).not.toBeFalsy();
      expect(toggler.length).toBeGreaterThan(0);
    });
    service.setItemsOpen(testVals);
  });

});
