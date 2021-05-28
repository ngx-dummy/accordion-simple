import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display welcome message', async () => {
		await page.navigateHome();
		expect(page.getTitleText()).toEqual('Accordion Sample');
	});

	it('should open item of first accordion', async () => {
		await page.navigateHome();
		const itemHeaderWebEl = await page.getAccordionSecondItemHeaderEl();
		await itemHeaderWebEl.click();
		expect((await page.getAccordionSecondItemBodyEl()).getAttribute('class')).toContain('opened');
	});

	it('should verify proper behavior of first accordion on item opening (only one opened item at a time)', async () => {
		await page.navigateHome();
		await (await page.getAccordionFirstItemHeaderEl()).click();
		expect((await page.getAccordionFirstItemBodyEl()).getAttribute('class')).toContain('opened');

		browser.wait(() => (setTimeout(() => true), 1000), 5000, 'just waiting...');
		await (await page.getAccordionSecondItemHeaderEl()).click();
		expect((await page.getAccordionFirstItemBodyEl()).getAttribute('class')).toContain('closed');
		expect((await page.getAccordionSecondItemBodyEl()).getAttribute('class')).toContain('opened');

		browser.wait(() => (setTimeout(() => true), 1000), 5000, 'just waiting...');
		await (await page.getAccordionThirdItemHeaderEl()).click();
		expect((await page.getAccordionThirdItemBodyEl()).getAttribute('class')).toContain('opened');
		expect((await page.getAccordionFirstItemBodyEl()).getAttribute('class')).toContain('closed');
		expect((await page.getAccordionSecondItemBodyEl()).getAttribute('class')).toContain('closed');
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(
			jasmine.objectContaining({
				level: logging.Level.SEVERE,
			} as logging.Entry)
		);
	});

	afterAll(async () => {
		await browser.close();
	});
});
