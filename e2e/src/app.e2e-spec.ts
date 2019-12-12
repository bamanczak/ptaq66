import { AppPage } from './app.po';
import { browser, logging } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Walidator PESEL');
  });

  it('should accept valid PESEL', () => {
    page.navigateTo();
    page.fillPeselInput('19321212346');
    expect(page.getValidationMessage()).toEqual('PESEL prawidłowy');
    expect(page.getBirthDate()).toEqual('12.12.2019');
    expect(page.getSex()).toEqual('Kobieta');
  });

  it('should reject invalid PESEL', () => {
    page.navigateTo();
    page.fillPeselInput('19321212345');
    expect(page.getValidationMessage()).toEqual('PESEL nieprawidłowy');
  });

  afterEach(async () => {
  });
});
