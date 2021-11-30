export enum Signs {
  PLUS = '+',
  MINUS = '-',
  MULTIPLY = '×',
  DIVIDE = '/',
  DOT = '.',
  REMOVE = 'arrow-left',
}

export interface iCalculatorValue {
  name: string | number;
  isPrimary?: boolean;
  isIcon?: boolean;
}

export const calculatorValues: iCalculatorValue[] = [
  {name: Signs.PLUS, isPrimary: true},
  {name: 1},
  {name: 2},
  {name: 3},

  {name: Signs.MINUS, isPrimary: true},
  {name: 4},
  {name: 5},
  {name: 6},

  {name: Signs.MULTIPLY, isPrimary: true},
  {name: 7},
  {name: 8},
  {name: 9},

  {name: Signs.DIVIDE, isPrimary: true},
  {name: Signs.DOT},
  {name: 0},
  {name: Signs.REMOVE, isIcon: true},
];
