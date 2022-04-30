import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {SliderScreen, SwiperComponent} from './src/components';
import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import AuthScreen from './src/screens/AuthScreen';

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  {
    initialRouteName: 'Auth',
    defaultNavigationOptions: {
      title: 'Upstox',
    },
  },
);

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Home: HomeScreen,
});

const App = createAppContainer(MainNavigator);

export default () => {
  return <App />;
};
