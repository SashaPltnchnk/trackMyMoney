import styled from 'styled-components/native';
import {fontSizes} from '../../styles/variables';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

interface SCategory {
  pressed: boolean;
  bgColor: string;
}

export const CategoryContainer = styled.View`
  width: 25%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const CategoryPressable = styled.View`
  background-color: ${({pressed, bgColor}: SCategory) => pressed && bgColor};
  padding: 5px 10px;
  border-radius: 10px;
`;

export const CategoryText = styled.Text`
  font-size: ${fontSizes.middle}px;
  margin-top: 5px;
`;
