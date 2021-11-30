import React, {useCallback, useState} from 'react';

import {CommonIcon} from '../CommonIcon';
import {RoundButton} from '../RoundButton';
import {calculate, removeSpaces} from '../../helpers';
import {calculatorValues, Signs} from '../../consts/calculator';
import {
  Container,
  TextContainer,
  NumberText,
  RoundButtonContainer,
  FieldContainer,
} from './styles';

interface IProps {
  primary: string;
  secondary: string;
}

export const Calculator: React.FC<IProps> = ({primary, secondary}) => {
  const [sign, setSign] = useState<string>('');
  const [num, setNum] = useState<number>(0);
  const [res, setRes] = useState<number>(0);

  const onNumPress = useCallback(
    value => {
      if (removeSpaces(num).toString().length < 16) {
        const newNum =
          num === 0 && value === 0
            ? 0
            : removeSpaces(num) % 1 === 0
            ? removeSpaces(+(num.toString() + value.toString()))
            : +(num.toString() + value.toString());

        setNum(newNum);

        setRes(!sign ? 0 : res);
      }
    },
    [num, sign, res],
  );

  const onDotPress = useCallback(
    value => {
      setNum(!num.toString().includes(Signs.DOT) ? num + value : num);
    },
    [num],
  );

  const onSignPress = useCallback(
    value => {
      if (sign && res && num) {
        if (!(num === 0 && sign === Signs.DIVIDE)) {
          const newRes = calculate(removeSpaces(res), removeSpaces(num), sign);
          setRes(newRes);
          setNum(0);
          setSign(value);
        }
      } else {
        setRes(!res && +num ? +num : res);
        setNum(0);
        setSign(value);
      }
    },
    [res, num, sign],
  );

  const onClearAll = useCallback(() => {
    setRes(0);
    setSign('');
    setNum(0);
  }, []);

  const onClearLastPress = useCallback(() => {
    const numWithoutLast = num.toString().slice(0, -1);

    setNum(+numWithoutLast);
  }, [num]);

  const displayedValue = num ? num : res;

  return (
    <Container color={primary}>
      <TextContainer>
        <NumberText>{displayedValue}</NumberText>
        <CommonIcon
          name={'trash'}
          onPress={onClearAll}
          color={primary}
          size={28}
        />
      </TextContainer>

      <FieldContainer>
        {calculatorValues.map(({name, isPrimary, isIcon}) => {
          return (
            <RoundButtonContainer key={name}>
              <RoundButton
                text={!isIcon ? name : undefined}
                iconName={isIcon ? (name as string) : undefined}
                bgColor={isPrimary ? primary : secondary}
                onPress={
                  name === Signs.REMOVE
                    ? onClearLastPress
                    : name === Signs.PLUS ||
                      name === Signs.MINUS ||
                      name === Signs.MULTIPLY ||
                      name === Signs.DIVIDE
                    ? onSignPress.bind(onSignPress, name)
                    : name === Signs.DOT
                    ? onDotPress.bind(onDotPress, name)
                    : onNumPress.bind(onNumPress, name)
                }
              />
            </RoundButtonContainer>
          );
        })}
      </FieldContainer>
    </Container>
  );
};
