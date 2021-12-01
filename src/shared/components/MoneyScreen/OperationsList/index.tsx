import {FlatList, ListRenderItem} from 'react-native';
import React from 'react';

import {Category} from '../../../consts/categories';
import {Operation} from '../../../consts/operations';

import {OperationItem} from './OperationItem';
import {Divider, Empty, EmptyText} from './styles';

interface IProps {
  categories: Category[];
  color: string;
  operations: Operation[];
}

export const OperationsList: React.FC<IProps> = ({
  categories,
  color,
  operations,
}) => {
  const renderItem: ListRenderItem<Operation> = ({item}) => (
    <OperationItem item={item} categories={categories} />
  );

  const keyExtractor = (item: Operation) => item.id;

  return (
    <FlatList
      data={operations}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      scrollEnabled={false}
      ItemSeparatorComponent={() => {
        return <Divider color={color} />;
      }}
      ListEmptyComponent={() => {
        return (
          <Empty>
            <EmptyText>no operations</EmptyText>
          </Empty>
        );
      }}
    />
  );
};
