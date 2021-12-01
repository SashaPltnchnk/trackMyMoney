import React from 'react';

import {colors} from '../../../shared/styles/variables';
import {expensesCategories} from '../../../shared/consts/categories';
import {testOperations} from '../../../shared/consts/operations';

import {MoneyScreen} from '../../../shared/components/MoneyScreen';

export function ExpsScreen() {
  return (
    <MoneyScreen
      categories={expensesCategories}
      primaryColor={colors.primaryOrange}
      secondaryColor={colors.secondaryOrange}
      operations={testOperations}
    />
  );
}
