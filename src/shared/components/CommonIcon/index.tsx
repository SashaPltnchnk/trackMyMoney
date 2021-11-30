import React from 'react';
import {Icon} from 'react-native-elements';
import {IconProps} from 'react-native-elements/dist/icons/Icon';

export const CommonIcon: React.FC<IconProps> = props => {
  return (
    <Icon
      type={'font-awesome'}
      // temporary fix connected to issue: https://github.com/react-native-elements/react-native-elements/issues/3227
      tvParallaxProperties={undefined}
      {...props}
    />
  );
};
