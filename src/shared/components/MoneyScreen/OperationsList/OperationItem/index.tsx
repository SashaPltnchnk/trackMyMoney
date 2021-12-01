import {View} from 'react-native';
import React from 'react';

import {Category} from '../../../../consts/categories';
import {Operation} from '../../../../consts/operations';

import {CommonIcon} from '../../../CommonIcon';
import {
  Container,
  IconContainer,
  ItemContainer,
  TimeContainer,
  BoldText,
  SmallText,
} from '../styles';

interface IProps {
  item: Operation;
  categories: Category[];
}

export const OperationItem: React.FC<IProps> = ({item, categories}) => {
  const timestamp = item.time.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });

  const category = categories.find(c => c.id === item.categoryId);

  if (!category) {
    return null;
  }

  return (
    <Container>
      <IconContainer>
        <CommonIcon
          name={category.iconName}
          size={28}
          color={category.iconColor}
        />
      </IconContainer>

      <ItemContainer>
        <View>
          <BoldText>{category.name}</BoldText>
          <SmallText>My money</SmallText>
        </View>

        <TimeContainer>
          <BoldText>{item.amount}</BoldText>
          <SmallText>{timestamp}</SmallText>
        </TimeContainer>
      </ItemContainer>
    </Container>
  );
};
