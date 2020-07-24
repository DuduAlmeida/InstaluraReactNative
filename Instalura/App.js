import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Feed from './src/Views/Feed/Feed';
import Login from './src/Views/Login/Login';
import {createStackNavigatior} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';

const navigator = createStackNavigatior({
  Login : { screen: Login},
  Feed : { screen: Feed}
});

const AppContainer = createAppContainer(navigator);

export default function App() {

  return (
    <AppContainer />
  );
}
