import { browser, by, element, protractor } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getValidationMessage() {
    return element(by.css('.isValidMessage span')).getText() as Promise<string>;
  }

  getSex() {
    return element(by.css('#pesel-sex span')).getText() as Promise<string>;
  }

  getBirthDate() {
    return element(by.css('#pesel-dob span')).getText() as Promise<string>;
  }

  fillPeselInput(pesel: string) {
    const input = element(by.name('peselInput'));
    input.sendKeys(pesel);
    const submitButton = element(by.css('.big-input button'));
    submitButton.click();
  }

  waitForValidation() {
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(element(by.css('.isValidMessage'))), 5000);
  }
}
