/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU LGPLv3 License
 */
import { Observable } from 'rxjs';
import { AccordionOpenService } from './accordion-open.service';
import { IToggler } from './settings/';

describe('AccordionOpenService', () => {
	let service: AccordionOpenService = null;

	beforeEach(async () => {
		service = new AccordionOpenService();
	});

	afterEach(() => {
		!service?.closed && service?.close();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
		expect(service.itemsOpen$).toBeInstanceOf(Observable);
		expect(service.setItemsOpen).toBeInstanceOf(Function);
		expect(service.itemsOpenSnapshot).toBeInstanceOf(Array);
	});

	it('should emit value', () => {
		const testVals: IToggler[] = [{ itemId: 0, isOpen: true }];
		service.setItemsOpen(testVals);

		expect(service.itemsOpenSnapshot).toBeTruthy();
		expect(service.itemsOpenSnapshot.length).toBeGreaterThan(0);
		service.itemsOpen$.subscribe((toggler) => {
			expect(toggler).not.toBeFalsy();
			expect(toggler.length).toBeGreaterThan(0);
		});
	});
});
