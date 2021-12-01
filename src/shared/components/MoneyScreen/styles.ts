import styled from 'styled-components/native';

import {colors, fontSizes} from '../../styles/variables';

interface SHeader {
  bgColor: string;
}

export const Header = styled.View`
  background-color: ${({bgColor}: SHeader) => bgColor}
  padding: 10px 0;
  flex-direction: column;
  align-items: center;
`;

export const MoneyText = styled.Text`
  font-size: ${fontSizes.middle}px;
`;

export const AmountMoneyText = styled(MoneyText)`
  font-weight: bold;
`;

interface SLineView {
  bgColor: string;
}

export const LineView = styled.View`
  background-color: ${({bgColor}: SLineView) => bgColor};
  flex-direction: row;
  justify-content: center;
  padding-top: 3px;
  padding-bottom: 3px;
`;

interface SLineText {
  color: string;
}

export const LineText = styled.Text`
  color: ${({color}: SLineText) => color};
  font-size: ${fontSizes.small}px;
`;

export const LineAmountText = styled.Text`
  color: ${colors.black};
  font-size: ${fontSizes.middle}px;
`;
