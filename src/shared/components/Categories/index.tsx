import React from 'react';
import {Pressable} from 'react-native';

import {Category} from '../../consts/categories';

import {CommonIcon} from '../CommonIcon';
import {
  Container,
  CategoryContainer,
  CategoryPressable,
  CategoryText,
} from './styles';

interface IProps {
  categories: Category[];
  bgPressedColor: string;
}

export const Categories: React.FC<IProps> = ({categories, bgPressedColor}) => {
  return (
    <Container>
      {categories.map(category => {
        return (
          <CategoryContainer key={category.id}>
            <Pressable>
              {({pressed}) => (
                <CategoryPressable pressed={pressed} bgColor={bgPressedColor}>
                  <CommonIcon
                    name={category.iconName}
                    color={category.iconColor}
                    size={28}
                  />
                  <CategoryText>{category.name}</CategoryText>
                </CategoryPressable>
              )}
            </Pressable>
          </CategoryContainer>
        );
      })}
    </Container>
  );
};
