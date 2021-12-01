import {colors} from '../styles/variables';

export interface Category {
  id: string;
  name: string;
  iconColor: string;
  iconName: string;
}

export const incomesCategories: Category[] = [
  {
    id: '1111',
    name: 'Salary',
    iconColor: colors.yellow,
    iconName: 'envelope',
  },
  {
    id: '2222',
    name: 'Gift',
    iconColor: colors.blue,
    iconName: 'gift',
  },
  {
    id: '3333',
    name: 'Part-time',
    iconColor: colors.red,
    iconName: 'briefcase',
  },
];

export const expensesCategories: Category[] = [
  {
    id: '111',
    name: 'Food',
    iconColor: colors.yellow,
    iconName: 'cutlery',
  },
  {
    id: '222',
    name: 'Home',
    iconColor: colors.blue,
    iconName: 'home',
  },
  {
    id: '333',
    name: 'Auto',
    iconColor: colors.red,
    iconName: 'cab',
  },
  {
    id: '444',
    name: 'Leisure',
    iconColor: colors.yellow,
    iconName: 'glass',
  },
  {
    id: '555',
    name: 'Health',
    iconColor: colors.blue,
    iconName: 'hospital-o',
  },
  {
    id: '666',
    name: 'Beauty',
    iconColor: colors.red,
    iconName: 'scissors',
  },
  {
    id: '777',
    name: 'Pets',
    iconColor: colors.yellow,
    iconName: 'paw',
  },
  {
    id: '888',
    name: 'Technique',
    iconColor: colors.blue,
    iconName: 'television',
  },
];
