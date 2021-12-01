export interface Operation {
  id: string;
  categoryId: string;
  amount: number;
  time: Date;
}

export const testOperations: Operation[] = [
  {
    id: '1',
    categoryId: '111',
    amount: 123,
    time: new Date(),
  },
  {
    id: '2',
    categoryId: '333',
    amount: 123,
    time: new Date(),
  },
];