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

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import store from './store';
import SwipeNavigation from './navigation/SwipeNavigation';
import ExploreStack from './navigation/ExploreStack';
import Profile from './screens/Profile';
import ProfileStack from './navigation/ProfileStack';

export type StackParams = {
  SwipeNavigation: any;
  ExploreStack: any;
  Profile: any;
};
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.dark : Colors.light,
  };
  const BottomNav = createBottomTabNavigator<StackParams>();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNav.Navigator
          initialRouteName="SwipeNavigation"
          screenOptions={{
            tabBarStyle: {backgroundColor: 'black'},
          }}>
          <BottomNav.Screen
            name="SwipeNavigation"
            component={SwipeNavigation}
            options={{
              headerTitleAlign: 'center',
              headerShown: false,
              title: '',
              tabBarIcon: active =>
                active.focused ? (
                  <MaterialCommunityIcons
                    name="home-variant"
                    size={25}
                    color={'white'}
                  />
                ) : (
                  <Octicons name="home" size={21} color={'white'} />
                ),
            }}
          />
          <BottomNav.Screen
            name="ExploreStack"
            component={ExploreStack}
            options={{
              headerTitleAlign: 'center',
              headerShown: false,
              title: '',
              tabBarIcon: active =>
                active.focused ? (
                  <Entypo name="magnifying-glass" size={25} color="white" />
                ) : (
                  <MaterialCommunityIcons
                    name="magnify"
                    size={25}
                    color={'white'}
                    style={{fontWeight: 'bold'}}
                  />
                ),
            }}
          />
          <BottomNav.Screen
            name="Profile"
            component={ProfileStack}
            options={{
              headerTitleAlign: 'center',
              headerShown: false,
              headerBackground: () => {
                return (
                  <View
                    style={{backgroundColor: 'black', height: 200, width: 200}}
                  />
                );
              },
              title: '',
              tabBarIcon: active =>
                active.focused ? (
                  <Ionicons name="person-circle" size={26} color={'white'} />
                ) : (
                  <Ionicons
                    name="person-circle-outline"
                    size={26}
                    color={'white'}
                  />
                ),
            }}
          />
        </BottomNav.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
