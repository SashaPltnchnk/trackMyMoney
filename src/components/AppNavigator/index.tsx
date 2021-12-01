import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

import {colors} from '../../shared/styles/variables';

import {IncomesScreen} from './IncomesScreen';
import {ExpsScreen} from './ExpsScreen';
import {CommonIcon} from '../../shared/components/CommonIcon';

export type TabNavigatorParams = {
  Incomes: undefined;
  Expenses: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParams>();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === 'Incomes') {
            iconName = focused ? 'plus-circle' : 'plus';
          } else if (route.name === 'Expenses') {
            iconName = focused ? 'minus-circle' : 'minus';
          }

          return <CommonIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.violet,
        tabBarInactiveTintColor: colors.grey,
      })}>
      <Tab.Screen
        name={'Incomes'}
        component={IncomesScreen}
        options={opt => TabOptions(opt, colors.primaryGreen)}
      />
      <Tab.Screen
        name={'Expenses'}
        component={ExpsScreen}
        options={opt => TabOptions(opt, colors.primaryOrange)}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const TabOptions = (
  opt: {
    route: RouteProp<TabNavigatorParams, 'Incomes' | 'Expenses'>;
    navigation: any;
  },
  bgColor: string,
): BottomTabNavigationOptions => {
  return {
    headerStyle: {
      backgroundColor: bgColor,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
};
