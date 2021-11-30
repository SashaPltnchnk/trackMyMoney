import {Pressable, PressableProps, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

import {CommonIcon} from '../CommonIcon';
import {fontSizes} from '../../styles/variables';

interface SStyledView {
  bgColor: string;
  pressed: boolean;
}

const StyledView = styled.View`
  background-color: ${({bgColor}: SStyledView) => bgColor};
  opacity: ${({pressed}) => (pressed ? '0.8' : '1')};
  padding: 10px;
  width: 52px;
  height: 52px;
  border-radius: 26px;
  justify-content: center;
  align-items: center;
`;

interface IProps extends PressableProps {
  text?: string | number;
  bgColor: string;
  iconName?: string;
}

export const RoundButton: React.FC<IProps> = ({
  text,
  bgColor,
  iconName,
  ...rest
}) => {
  return (
    <Pressable {...rest}>
      {({pressed}) => (
        <StyledView pressed={pressed} bgColor={bgColor}>
          {iconName ? (
            <CommonIcon name={iconName} size={20} />
          ) : (
            <Text style={{fontSize: fontSizes.subtitle1}}>{text}</Text>
          )}
        </StyledView>
      )}
    </Pressable>
  );
};
