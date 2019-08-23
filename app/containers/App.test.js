import {addition, multiplication, substraction, division} from './App';

describe('checking correct test scenarios', () => {   
  it('should add numbers', () => {
      expect(addition(5, 5)).toEqual(10);
   });   
  it('should multiply numbers', () => {
      expect(multiplication(3, 2)).toEqual(6);
  });   
  it('should substract numbers', () => {
      expect(substraction(5, 5)).toEqual(0);
  });   
  it('should divide numbers', () => {
    expect(division(9, 3)).toEqual(3);
  });
});

describe('checking incorrect test scenarios', () => {   
  it('should add numbers', () => {
      expect(addition(5, 5)).toEqual(11);
   });   
  it('should multiplyn numbers', () => {
      expect(multiplication(3, 2)).toEqual(12);
  });   
  it('should substrac numbers', () => {
      expect(substraction(5, 5)).toEqual(22);
  });   
  it('should divide numbers', () => {
    expect(division(9, 3)).toEqual(23);
  });
});


