import { browser, by, element, WebElementPromise } from 'protractor';
import { dummyAccordionList1 } from '../../src/app/helpers/dummy-data';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root#app1 .app-title')).getText() as Promise<string>;
  }

  getFirstAccordion(): WebElementPromise {
    return element(by.id(dummyAccordionList1.id.toString())).getWebElement();
  }

}
