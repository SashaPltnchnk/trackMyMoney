import {View} from 'react-native';
import React from 'react';

import {Category} from '../../consts/categories';
import {Operation} from '../../consts/operations';

import {OperationsList} from './OperationsList';
import {Calculator} from '../Calculator';
import {Categories} from '../Categories';
import {
  Header,
  MoneyText,
  AmountMoneyText,
  LineView,
  LineText,
  LineAmountText,
} from './styles';

interface IProps {
  categories: Category[];
  primaryColor: string;
  secondaryColor: string;
  operations: Operation[];
}

export const MoneyScreen: React.FC<IProps> = ({
  categories,
  primaryColor,
  secondaryColor,
  operations,
}) => {
  return (
    <View>
      <Header bgColor={secondaryColor}>
        <MoneyText>My money: </MoneyText>
        <AmountMoneyText>0</AmountMoneyText>
      </Header>

      <Calculator primary={primaryColor} secondary={secondaryColor} />

      <Categories categories={categories} bgPressedColor={secondaryColor} />

      <LineView bgColor={secondaryColor}>
        <LineText color={primaryColor}>earned today: </LineText>
        <LineAmountText>0</LineAmountText>
      </LineView>

      <OperationsList
        categories={categories}
        color={primaryColor}
        operations={operations}
      />
    </View>
  );
};
