import React from 'react';

import {incomesCategories} from '../../../shared/consts/categories';
import {colors} from '../../../shared/styles/variables';

import {MoneyScreen} from '../../../shared/components/MoneyScreen';

export function IncomesScreen() {
  return (
    <MoneyScreen
      categories={incomesCategories}
      primaryColor={colors.primaryGreen}
      secondaryColor={colors.secondaryGreen}
      operations={[]}
    />
  );
}
