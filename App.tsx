/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './src/screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreStack from './src/navigation/FeedStack.tsx/ExploreStack';
import HomeStack from './src/navigation/FeedStack.tsx/HomeStack';
import {Provider} from 'react-redux';
import store from './src/store';
import {Swipeable} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Navigation from './src/navigation/Navigation';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './src/screens/Home';
import Messages from './src/screens/Messages';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createMaterialTopTabNavigator();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.dark : Colors.light,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Navigation" tabBar={() => null}>
          <Tab.Screen name="Navigation" component={Navigation} />
          <Tab.Screen name="Messages" component={Messages} />
          {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
