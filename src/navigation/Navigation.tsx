import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './FeedStack.tsx/HomeStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import ExploreStack from './FeedStack.tsx/ExploreStack';
import Entypo from 'react-native-vector-icons/Entypo';
import Profile from '../screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type StackParams = {
  HomeStack: any;
  ExploreStack: any;
  Profile: any;
};

const Navigation = () => {
  const BottomNav = createBottomTabNavigator<StackParams>();
  return (
    <BottomNav.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',
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
  );
};

export default Navigation;

const styles = StyleSheet.create({});
