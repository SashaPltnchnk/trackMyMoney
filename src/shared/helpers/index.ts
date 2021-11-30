import {Signs} from '../consts/calculator';

export const calculate = (
  a: number,
  b: number,
  operationSign: string,
): number => {
  return operationSign === Signs.PLUS
    ? a + b
    : operationSign === Signs.MINUS
    ? a - b
    : operationSign === Signs.MULTIPLY
    ? a * b
    : a / b;
};

export const removeSpaces = (num: number): number =>
  +num.toString().replace(/\s/g, '');
