import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

let component;

describe('AppComponent', () => {
  beforeEach(async(() => {
    component = new AppComponent();
  }));

  it('should handle submit correctly with valid PESEL', () => {
    component.inputNumber = '19321212346';
    component.onSubmit();
    expect(component.isValid).toBe(true);
    expect(component.day).toBe(12);
    expect(component.year).toBe(2019);
    expect(component.month).toBe(12);
  });

  it('should handle submit correctly with invalid PESEL', () => {
    component.inputNumber = '19321212345';
    component.onSubmit();
    expect(component.day).toBe(undefined);
    expect(component.isValid).toBe(false);
  });

});
