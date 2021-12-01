import styled from 'styled-components/native';

import {colors, fontSizes} from '../../../styles/variables';

// OperationItem
export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0 5px 15px;
`;

export const IconContainer = styled.View`
  width: 10%;
`;

export const ItemContainer = styled.View`
  margin-left: 5px;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`;

export const TimeContainer = styled.View`
  margin-right: 20px;
  align-items: flex-end;
`;

export const BoldText = styled.Text`
  font-size: ${fontSizes.middle}px;
  font-weight: 600;
`;

export const SmallText = styled.Text`
  font-size: ${fontSizes.small}px;
`;

// OperationsList
interface SDivider {
  color: string;
}

export const Divider = styled.View`
  border-color: ${({color}: SDivider) => color};
  border-bottom-width: 1px;
  width: 85%;
  align-self: flex-end;
`;

export const Empty = styled.View`
  padding: 15px 0;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  font-size: ${fontSizes.middle}px;
  color: ${colors.black};
`;
