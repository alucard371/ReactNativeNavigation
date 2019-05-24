import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

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

const LinksStack = createStackNavigator({
  Touits: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Touits List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-reorder' : 'md-reorder'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Trends: SettingsScreen,
});

SettingsStack.navigationOptions = {
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
  LinksStack,
  SettingsStack,
});
