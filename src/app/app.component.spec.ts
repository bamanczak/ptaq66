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

  it('should reject invalid PESEL', () => {
    component.inputNumber = '19321212343';
    component.onSubmit();
    expect(component.isValid).toBe(false);
  });

  it('should reject PESEL with invalid date', () => {
    component.inputNumber = '19323212344';
    component.onSubmit();
    expect(component.isValid).toBe(false);
  });

  it('should reject PESEL with invalid leap year', () => {
    component.inputNumber = '19222912341';
    component.onSubmit();
    expect(component.isValid).toBe(false);
  });

  it('should reject PESEL with invalid characters', () => {
    component.inputNumber = 'asdasd';
    component.onSubmit();
    expect(component.isValid).toBe(false);
  });


  it('should identify birth in XXIth century correctly', () => {
    const pesel21Century: Array<number> = [1, 9, 3, 2, 1, 2, 1, 2, 3, 4, 5];
    expect(component.getYear(pesel21Century)).toEqual(2019);
  });

});
