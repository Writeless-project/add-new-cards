import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddNewJournalScreen from '../screens/AddNewJournalScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Journals',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`ios-book${focused ? '' : '-outline'}`}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`ios-settings${focused ? '' : '-outline'}`}
    />
  ),
};

const DevStack = createStackNavigator({
  Dev: AddNewJournalScreen,
});

DevStack.navigationOptions = {
  tabBarLabel: 'Dev',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`ios-more${focused ? '' : '-outline'}`}
    />
  ),
}

export default createBottomTabNavigator({
  HomeStack,
  SettingsStack,
  DevStack
});
