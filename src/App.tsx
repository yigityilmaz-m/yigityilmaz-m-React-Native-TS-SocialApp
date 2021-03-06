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
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider, useSelector} from 'react-redux';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import store, {RootState} from './store';

import ExploreStack from './navigation/ExploreStack';
import Profile from './screens/Profile';

import {User, UserData} from './store/types';
import usersReducer from './store/reducers/usersReducer';
import HomeStack from './navigation/HomeStack';

export type StackParams = {
  HomeStack: any;
  ExploreStack: any;
  Profile: {user: User};
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
          initialRouteName="HomeStack"
          screenOptions={{
            tabBarStyle: {backgroundColor: 'black'},
          }}>
          <BottomNav.Screen
            name="HomeStack"
            component={HomeStack}
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
                  <Octicons
                    name="home"
                    size={21}
                    color={'white'}
                    // onPress={() => {}}
                  />
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
            component={Profile}
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
