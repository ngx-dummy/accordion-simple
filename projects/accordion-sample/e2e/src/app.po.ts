import { browser, by, element, WebElementPromise } from 'protractor';
import { dummyAccordionList1, dummyAccordionList2 } from '../../src/app/helpers/dummy-data';

export class AppPage {
  navigateHome(): Promise<unknown> {
    return this.navigateTo();
  }

  navigateTo(url: string = browser.baseUrl) {
    return browser.get(url) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root#app1 .app-title:first-of-type')).getText() as Promise<string>;
  }

  getFirstAccordion(): WebElementPromise {
    return element(by.id(dummyAccordionList1.id.toString())).getWebElement();
  }

  getSecondAccordion(): WebElementPromise {
    return element(by.id(dummyAccordionList2.id.toString())).getWebElement();
  }

  async getAccordionFirstItemBodyEl() {
    return (await this.getFirstAccordion()).findElement(by.css('ngxd-accordion-item .accord-item__body:nth-of-type(1)'));
  }

  async getAccordionFirstItemHeaderEl() {
    return (await this.getFirstAccordion()).findElement(by.css('ngxd-accordion-item .accord-item__header:nth-of-type(1)'));
  }
  async getAccordionSecondItemBodyEl() {
    return (await this.getFirstAccordion()).findElement(by.css('ngxd-accordion-item .accord-item__body:nth-of-type(2)'));
  }

  async getAccordionSecondItemHeaderEl() {
    return (await this.getFirstAccordion()).findElement(by.css('ngxd-accordion-item .accord-item__header:nth-of-type(2)'));
  }

  async getAccordionThirdItemBodyEl() {
    return (await this.getFirstAccordion()).findElement(by.css('ngxd-accordion-item .accord-item__body:nth-of-type(3)'));
  }

  async getAccordionThirdItemHeaderEl() {
    return (await this.getFirstAccordion()).findElement(by.css('ngxd-accordion-item .accord-item__header:nth-of-type(3)'));
  }

}
