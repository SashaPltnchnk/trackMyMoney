import styled from 'styled-components/native';

import {fontSizes} from '../../styles/variables';

interface SContainer {
  color: string;
}

export const Container = styled.View`
  border-width: 2px;
  border-radius: 20px;
  border-color: ${({color}: SContainer) => color};
  margin: 20px 40px 0;
  padding: 10px;
`;

export const FieldContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
`;

export const NumberText = styled.Text`
  text-align: center;
  font-size: ${fontSizes.subtitle1}px;
`;

export const RoundButtonContainer = styled.View`
  width: 25%;
  align-items: center;
  margin-bottom: 5px;
`;
