import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TouitsScreen from '../screens/TouitsScreen';
import TrendsScreen from '../screens/TrendsScreen';

const HomeStack = createStackNavigator({
  SendTouit: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Send Touit',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-phone-portrait${focused ? '' : '-outline'}`
          : 'md-phone-portrait'
      }
    />
  ),
};

const TouitsStack = createStackNavigator({
  Touits: TouitsScreen,
});

TouitsStack.navigationOptions = {
  tabBarLabel: 'Touits List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-reorder' : 'md-reorder'}
    />
  ),
};

const TrendsStack = createStackNavigator({
  Trends: TrendsScreen,
});

TrendsStack.navigationOptions = {
  tabBarLabel: 'Trends List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  TouitsStack,
  TrendsStack,
});
